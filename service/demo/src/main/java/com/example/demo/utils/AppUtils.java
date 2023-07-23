package com.example.demo.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.ISO8601DateFormat;

public class AppUtils {

	private static ObjectMapper mapper = null;
	
	static {
		mapper = new ObjectMapper();
		mapper.disable(SerializationFeature.INDENT_OUTPUT);
		mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
		mapper.setDateFormat(new ISO8601DateFormat());
	}
	
}
