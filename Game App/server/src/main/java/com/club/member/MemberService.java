package com.club.member;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Transactional
    public Member createMember(String name, String phone, double fee) {
        Member member = Member.builder()
                .name(name)
                .phone(phone)
                .balance(fee)
                .build();
        return memberRepository.save(member);
    }

    public Map<String, Object> searchByPhone(String phone) {
        Member member = memberRepository.findByPhone(phone).orElse(null);
        Map<String, Object> result = new HashMap<>();
        result.put("member", member);
        return result;
    }
}


