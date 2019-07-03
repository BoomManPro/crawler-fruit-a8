package cn.boommanpro;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 21:32
 * @since 1.0.0
 */
public class A8ResponseDecode {
    public static void main(String[] args) throws IOException {
        Document document = Jsoup.connect("http://www.arm8.net/4337.html")
                .header("Cookie", "wordpress_e59e05808f641d51e8eca04bad35054e=xyz12134%7C1559740995%7CcPI9Mg9Iihxc6U8NQin98qkEsep5ccA88ukAQ0jyzCL%7C4c9f5354af5a394910a61adc7b85fb432934ba57d89b078701f5747dda5d1e35; Hm_lvt_5f1385fea42397f49de05ea78310db59=1559416132,1559465739,1559481712,1559567010; flow-mode=blog; wordpress_logged_in_e59e05808f641d51e8eca04bad35054e=xyz12134%7C1559740995%7CcPI9Mg9Iihxc6U8NQin98qkEsep5ccA88ukAQ0jyzCL%7C62ba3e33563d12faa534a40eb4e81fa48029bed6b5b7aad9b5544a8a33158824; Hm_lpvt_5f1385fea42397f49de05ea78310db59=1559568464")
                .get();
//        #body-header-top > div.main > div > div.main_right.sidebar > div.widget.widget_download > div.widget_down_div > a
        Elements select = document.select("#body-header-top > div.main > div > div.main_right.sidebar > div.widget.widget_download > div.widget_down_div > a");
        String dataDown = select.attr("data-down");
        System.out.println(dataDown);
        Map map = new HashMap();


        map.put("action", "Post_down_ajax");
        map.put("pid", "4330");
        map.put("uid", "13089");
        map.put("down", dataDown);
        map.put("name", "下载资源");

        Document document1 = Jsoup.connect("http://www.arm8.net/wp-admin/admin-ajax.php").header("Cookie", "wordpress_e59e05808f641d51e8eca04bad35054e=xyz12134%7C1559740995%7CcPI9Mg9Iihxc6U8NQin98qkEsep5ccA88ukAQ0jyzCL%7C4c9f5354af5a394910a61adc7b85fb432934ba57d89b078701f5747dda5d1e35; Hm_lvt_5f1385fea42397f49de05ea78310db59=1559416132,1559465739,1559481712,1559567010; flow-mode=blog; wordpress_logged_in_e59e05808f641d51e8eca04bad35054e=xyz12134%7C1559740995%7CcPI9Mg9Iihxc6U8NQin98qkEsep5ccA88ukAQ0jyzCL%7C62ba3e33563d12faa534a40eb4e81fa48029bed6b5b7aad9b5544a8a33158824; Hm_lpvt_5f1385fea42397f49de05ea78310db59=1559568464")
                .data(map)
                .post();
        System.out.println(document1.toString());

    }

    public static String decode2Url(String origin) {
        origin = specialCharHandler(origin);
        return BtoaUtils.atob(origin);
    }

    private static String specialCharHandler(String origin) {
        return origin.replaceAll("\\*!agf", "=")
                .replaceAll("&a\\^f", "b")
                .replaceAll("[^A-Za-z0-9\\+\\/\\=]", "");
    }
}
