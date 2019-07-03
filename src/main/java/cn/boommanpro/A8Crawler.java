package cn.boommanpro;

import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 23:08
 * @since 1.0.0
 */
@Slf4j
@Component
public class A8Crawler {
    @Autowired
    private A8AccountConfigProperties a8AccountConfigProperties;


    private static final String ADMIN_AJAX_URL = "http://www.arm8.net/wp-admin/admin-ajax.php";


    public A8Page queryA8Page(String url) throws IOException {
        A8Page a8Page = new A8Page();
        Document document = Jsoup.connect(url).header("Cookie", a8AccountConfigProperties.getCookie())
                .get();
        String pid = getPid(url);
        String fullTitle=document.select("#body-header-top > div.main > div > div.main_left.single_mian > div.item_title > h1").text();
        Elements downElement = document.select("#body-header-top > div.main > div > div.main_right.sidebar > div.widget.widget_download > div.widget_down_div > a");
        String dataDown =downElement.attr("data-down");
        String extractCode = downElement.attr("data-ma");
        String content = document.select("#content").toString();
        String panUrl = queryYunPanUrl(pid,dataDown);
        a8Page.setFullTitle(fullTitle);
        a8Page.setUrl(url);
        a8Page.setContent(content);
        a8Page.setExtractCode(extractCode);
        a8Page.setPanUrl(panUrl);
        return a8Page;
    }


    public String queryYunPanUrl(String pid,String dataDown) throws IOException {
        Map<String, String> param = new HashMap<>();
        param.put("action", "Post_down_ajax");
        param.put("pid", pid);
        param.put("uid", a8AccountConfigProperties.getUid());
        param.put("down", dataDown);
        param.put("name", "下载资源");
        String requestBody = Jsoup.connect(ADMIN_AJAX_URL).header("Cookie", a8AccountConfigProperties.getCookie())
                .data(param).post().text();
        AdminAjaxResult adminAjaxResult = JSON.parseObject(requestBody, AdminAjaxResult.class);
        String url = A8ResponseDecode.decode2Url(adminAjaxResult.getData());
        log.info("请求资源地址: http://www.arm8.net/{}.html 请求结果{} \n解密后地址:{}", pid, adminAjaxResult,url);
        return url;
    }

    private static final String PID_REGEX = "(?<pid>/[0-9]+)\\.html";

    public String getPid(String url){
        Pattern pattern = Pattern.compile(PID_REGEX);
        Matcher matcher = pattern.matcher(url);
        matcher.find();
        return matcher.group("pid");
    }
}
