package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {
    Optional<Member> findByEmail(String email);
    Optional<Member> findByToken(String token);
    Member findByMemberId(Long memberId);
    Optional<Member> findByNickname(String word);
}
