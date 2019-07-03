package cn.boommanpro.dao;

import cn.boommanpro.model.A8SourceCode;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface A8SourceCodeMapper extends BaseMapper<A8SourceCode> {
    Integer batchInsert(@Param("a8SourceCodeList") List<A8SourceCode> a8SourceCodeList);
}