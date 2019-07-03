package cn.boommanpro;

import cn.boommanpro.dao.A8SourceCodeMapper;
import cn.boommanpro.model.A8SourceCode;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 23:51
 * @since 1.0.0
 */
@Service
public class A8CrawlerService {

    @Autowired
    private A8SourceCodeMapper a8SourceCodeMapper;

    @Autowired
    private A8Crawler a8Crawler;

    public A8SourceCode updateA8SourceCode(Integer id) throws IOException {
        A8SourceCode a8SourceCode = a8SourceCodeMapper.selectById(id);
        A8Page a8Page = a8Crawler.queryA8Page(a8SourceCode.getUrl());
        a8SourceCode.setPageContent(a8Page.getContent());
        a8SourceCode.setFullTitle(a8Page.getFullTitle());
        a8SourceCode.setPanUrl(a8Page.getPanUrl());
        a8SourceCode.setExtractCode(a8Page.getExtractCode());
        a8SourceCodeMapper.updateById(a8SourceCode);
        return null;
    }



    public List<A8SourceCode> queryA8ListByPageNum(Integer pageNum) throws IOException {
        Document document = Jsoup.connect("http://www.arm8.net/page/" + pageNum + "/").get();
        Elements select = document.select("#index_ajax_list li");
        List<A8SourceCode> a8SourceCodeList = new ArrayList<>();
        A8SourceCode a8SourceCode;
        for (Element element : select) {
            a8SourceCode = new A8SourceCode();
            String title = element.select("h2").text();
            a8SourceCode.setTitle(title);
            String url = element.select(" div > div.post_right > h2 > a").attr("href");
            a8SourceCode.setUrl(url);
            String aboutImg = element.select(" div > div.post_left > a > img").attr("src");
            a8SourceCode.setAboutImg(aboutImg);
            String tag = element.select("div > div.post_right > div.cat > span > a").text();
            a8SourceCode.setTag(tag);
            String createDate = element.select("div > div.post_right > div.post_meta > span:nth-child(1)").text();

            a8SourceCode.setCreateDate(createDate);
            String about = element.select("div > div.post_right > p").text();
            a8SourceCode.setAbout(about);
            a8SourceCodeList.add(a8SourceCode);
        }
        return a8SourceCodeList;
    }
}
