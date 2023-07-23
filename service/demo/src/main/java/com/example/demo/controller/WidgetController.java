package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class WidgetController {

	@GetMapping("/getWidgetsByFileName/{fileName}")
	public String getWidgetByFileName(@PathVariable String fileName){
		
		File f = new File("/Users/rautatul/Documents/INDICUS-WORK/files/" + fileName);
		if(f.exists()) {
			BufferedReader reader;
			StringBuffer sb = new StringBuffer();
			try {
				reader = new BufferedReader(new FileReader(f));
				String line = reader.readLine();
				if(null != line) {
					sb.append(line);
				}

				while (line != null) {
					line = reader.readLine();
					if(null != line) {
						sb.append(line);
					}
				}

				reader.close();
				if(sb.isEmpty()) {
					return "{}";
				}
				System.out.println(sb.toString());
				return sb.toString();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		return "{}";
	}
}
