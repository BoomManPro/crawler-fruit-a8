package cn.boommanpro;

import lombok.Data;

/**
 * @author <a href="mailto:boommanpro@gmail.com">BoomManPro</a>
 * @data 2019/6/3 23:10
 * @since 1.0.0
 */
@Data
public class AdminAjaxResult {
    /**
     * status : 1
     * msg : 这是您今天下载的第11个资源，您今天还可以下载9989个资源！
     * data : aHR0cHM&6Ly9wYW*4uYmFpZ!HUuY29t@L3MvMWp&l&a^fjRSen^IyZklSV@m9Jd2NM%QW1kS3c@*!agf%
     */

    private int status;
    private String msg;
    private String data;
}
