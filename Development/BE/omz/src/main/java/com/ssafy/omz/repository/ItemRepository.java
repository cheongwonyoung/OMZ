package com.ssafy.omz.repository;
import com.ssafy.omz.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item,Long> {
}
