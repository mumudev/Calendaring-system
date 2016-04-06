package com.mumudev.controller;

import org.apache.commons.logging.impl.Log4JLogger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


public class DemoController {
	@RequestMapping( "/")
	public String doTest2(){
		Log4JLogger log4jLogger= new Log4JLogger();
		log4jLogger.error("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		return "demo";
   }
}
