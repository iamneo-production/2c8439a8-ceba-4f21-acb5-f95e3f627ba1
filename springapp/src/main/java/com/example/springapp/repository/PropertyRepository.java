package com.example.springapp.repository;

import com.example.springapp.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {


    Property findById(long id);

    @Query(value = "select * from property_table where agent_id=?1",nativeQuery = true)
    List<Property> getpropertybyAgentid(Long agentId);

}
