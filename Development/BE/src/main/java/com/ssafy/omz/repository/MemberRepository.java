package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
}
