package cn.boommanpro;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.IOException;

import static org.junit.Assert.*;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 23:41
 * @since 1.0.0
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class A8CrawlerTest {

    @Autowired
    private A8Crawler a8Crawler;
    @Test
    public void queryA8Page() throws IOException {
        A8Page a8Page = a8Crawler.queryA8Page("http://www.arm8.net/4330.html");
        System.out.println(a8Page);

    }
}