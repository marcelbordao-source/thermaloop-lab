const assert=require('node:assert/strict');
function model({hot,cold,flow,eff,hours=8}){const out=Math.min(hot,cold+Math.max(0,eff/100*(hot-cold))),kw=flow/60*4.186*(out-cold);return{out,kw,day:kw*hours}}
let r=model({hot:95,cold:25,flow:6,eff:55});assert.equal(r.out,63.5);assert(Math.abs(r.kw-16.117)<.01);assert(Math.abs(r.day-128.936)<.01);r=model({hot:45,cold:55,flow:10,eff:85});assert.equal(r.out,55);assert.equal(r.kw,0);r=model({hot:150,cold:10,flow:20,eff:85});assert(r.out<=150);console.log('✓ 3 testes de modelo térmico aprovados');
