package cn.boommanpro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 21:31
 * @since 1.0.0
 */
@SpringBootApplication
@EnableConfigurationProperties(A8AccountConfigProperties.class)
public class CrawlerFruitA8Application {
    public static void main(String[] args) {
        new SpringApplication(CrawlerFruitA8Application.class).run(args);
    }
}
