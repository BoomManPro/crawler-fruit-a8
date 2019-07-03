package cn.boommanpro;

import org.junit.Test;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.net.URLDecoder;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 21:57
 * @since 1.0.0
 */
public class DataBreal {
    @Test
    public void test() {
        String url = "aHR0cHM@6Ly9wYW&4uYmFpZ*HUuY29t!L3MvMWp!l&a^fjRSen!IyZklSV@m9Jd2NM&QW1kS3c%*!agf*";
        System.out.println(A8ResponseDecode.decode2Url(url));
    }


}
