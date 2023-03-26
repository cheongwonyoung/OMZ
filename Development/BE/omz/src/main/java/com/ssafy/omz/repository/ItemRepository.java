package com.ssafy.omz.repository;
import com.ssafy.omz.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item,Long> {
    List<Item> findAllByMember_MemberIdAndItemType_ItemTypeId(Long memberId, Long itemTypeId);

    Item findByMember_MemberIdAndName(Long memberId, String name);
}
