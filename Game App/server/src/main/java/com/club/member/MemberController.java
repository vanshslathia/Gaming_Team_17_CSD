package com.club.member;

import com.club.common.ApiResponse;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

record CreateMemberRequest(@NotBlank String name, @NotBlank String phone, @PositiveOrZero double fee) {}
record SearchRequest(@NotBlank String phone) {}

@RestController
@RequestMapping
public class MemberController {
    private final MemberService memberService;

    public MemberController(MemberService memberService) { this.memberService = memberService; }

    @PostMapping("/members")
    public ResponseEntity<ApiResponse<Member>> create(@Valid @RequestBody CreateMemberRequest req) {
        Member m = memberService.createMember(req.name(), req.phone(), req.fee());
        return ResponseEntity.ok(ApiResponse.ok(m));
    }

    @PostMapping("/members/search")
    public ResponseEntity<ApiResponse<Map<String, Object>>> search(@Valid @RequestBody SearchRequest req) {
        Map<String, Object> res = memberService.searchByPhone(req.phone());
        return ResponseEntity.ok(ApiResponse.ok(res));
    }
}


