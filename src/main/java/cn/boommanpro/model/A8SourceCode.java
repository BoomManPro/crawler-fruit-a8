package cn.boommanpro.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName(value = "a8_source_code")
public class A8SourceCode {
     @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @TableField(value = "url")
    private String url;

    @TableField(value = "title")
    private String title;

    @TableField(value = "about")
    private String about;

    @TableField(value = "about_img")
    private String aboutImg;

    @TableField(value = "tag")
    private String tag;

    @TableField(value = "create_date")
    private String createDate;

    @TableField(value = "full_title")
    private String fullTitle;

    @TableField(value = "page_content")
    private String pageContent;

    @TableField(value = "pan_url")
    private String panUrl;

    @TableField(value = "extract_code")
    private String extractCode;

    public static final String COL_URL = "url";

    public static final String COL_TITLE = "title";

    public static final String COL_ABOUT = "about";

    public static final String COL_ABOUT_IMG = "about_img";

    public static final String COL_TAG = "tag";

    public static final String COL_CREATE_DATE = "create_date";

    public static final String COL_FULL_TITLE = "full_title";

    public static final String COL_PAGE_CONTENT = "page_content";

    public static final String COL_PAN_URL = "pan_url";

    public static final String COL_EXTRACT_CODE = "extract_code";
}