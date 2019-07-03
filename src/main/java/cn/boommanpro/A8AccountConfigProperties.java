package cn.boommanpro;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 23:13
 * @since 1.0.0
 */
@Data
@ConfigurationProperties("a8")
public class A8AccountConfigProperties {
    private String uid;
    private String cookie;
}
