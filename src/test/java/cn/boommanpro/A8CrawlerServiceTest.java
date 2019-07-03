package cn.boommanpro;

import cn.boommanpro.dao.A8SourceCodeMapper;
import cn.boommanpro.model.A8SourceCode;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.IOException;
import java.util.List;
import java.util.Random;

import static org.junit.Assert.*;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/4 0:43
 * @since 1.0.0
 */
@Slf4j
@SpringBootTest
@RunWith(SpringRunner.class)
public class A8CrawlerServiceTest {
    @Autowired
    private A8CrawlerService a8CrawlerService;

    @Autowired
    private A8SourceCodeMapper a8SourceCodeMapper;

    @Test
    public void initListTest() throws IOException, InterruptedException {
        for (int i = 1; i <= 23; i++) {
            List<A8SourceCode> a8SourceCodes = a8CrawlerService.queryA8ListByPageNum(i);
            Integer integer = a8SourceCodeMapper.batchInsert(a8SourceCodes);
            if (integer < a8SourceCodes.size()) {
                log.info("插入截止");
                return;
            }
            Thread.sleep(1000+new Random().nextInt(1000));
        }

    }

    @Test
    public void updateA8SourceCode() throws IOException, InterruptedException {
        for (int i = 356; i <= 369; i++) {
            a8CrawlerService.updateA8SourceCode(i);
            Thread.sleep(1000+new Random().nextInt(1000));
        }
    }
}