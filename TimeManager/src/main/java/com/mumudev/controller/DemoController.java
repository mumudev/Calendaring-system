package com.mumudev.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


public class DemoController {
	@RequestMapping( "/demo")
	public String doTest2(){
		return "demo hahahahahaahhahaah";
   }

}
