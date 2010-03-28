//codeh.js, chcommon.js, codeh.css is developed by sandy_sp

  function HighLightCpp(str1)
  {
	var fstr1=new Object();
	fstr1.name1=cdh_Fill0(str1);

	str1=cdh_H2(str1,fstr1,/(\/\/.*)/gim,"shCmm1");
	str1=cdh_H3(str1,fstr1,/(\/\*(.|\n)*?\*\/)/gim,"shCmm1");
	str1=cdh_H3(str1,fstr1,/(^#(\\<br\/>\n|.)*)/gim,"shPre1");
	str1=cdh_H2(str1,fstr1,/(".*?")/gim,"shString1");
	str1=cdh_H2(str1,fstr1,/('.')/gim,"shString1");
	var re1=/\b(int|long|__int64|short|char|float|double|bool|void|unsigned|true|false)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shType1");
	var re1=/\b(for|while|do|if|else|switch|case|return|break|continue|virtual|static|const|auto|volatile|extern|explicit|inline|typedef|using|namespace|template|typename|sizeof|operator|new|delete|public|protected|private|friend|struct|class|union|enum|try|catch|throw|this|static_cast|dynamic_cast|const_cast|reinterpret_cast)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shReser1");
	var re1=/\b(BOOL|TRUE|FALSE|NULL|BYTE|WORD|DWORD|UINT|LPSTR|LPCSTR|LPTSTR|LPCTSTR|HANDLE|HDC|WINAPI|dllimport|dllexport|ASSERT|printf|scanf|std|vector|string|iterator)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shCommon1");

	return str1;
  }
  function HighLightVB(str1)
  {
	var fstr1=new Object();
	fstr1.name1=cdh_Fill0(str1);

	str1=cdh_H2(str1,fstr1,/('.*)/gim,"shCmm1");
	str1=cdh_H2(str1,fstr1,/(Rem\b.*)/gim,"shCmm1");
	str1=cdh_H2(str1,fstr1,/(^#.*)/gim,"shPre1");
	str1=cdh_H3(str1,fstr1,/("(""|.)*?")/gim,"shString1");
	var re1=/\b(integer|long|byte|string|single|double|boolean|any|currency|date|variant|true|false|nothing)\b/gim;
	str1=cdh_H2(str1,fstr1,re1,"shType1");
	var re1=/\b(for|to|next|while|wend|do|loop|until|if|then|else|elseif|select|case|return|exit|end|on|error|raise|goto|call|event|withevents|static|const|type|with|implements|new|function|sub|property|byval|byref|optional|public|dim|as|private|friend|declare|lib|alias|class|enum|me|option|explicit|let|set|get|and|or|not|mod|is)\b/gim;
	str1=cdh_H2(str1,fstr1,re1,"shReser1");
	var re1=/\b(form|picturebox|label|timer|left|right|mid|trim|ltrim|rtrim|space|instr|split|array|print|input|put|open|close|assert|createobject|filesystemobject|regexp|err|debug|app|screen|line|pset|paintpicture|circle)\b/gim;
	str1=cdh_H2(str1,fstr1,re1,"shCommon1");

	return str1;
  }
  function HighLightXML(str1,html1) 
  {
	var fstr1=new Object();
	fstr1.name1=cdh_Fill0(str1);

	str1=cdh_H3(str1,fstr1,/(&lt;!--(.|\n)*?--&gt;)/gim,"shCmm1");
	if (html1==true){
		str1=cdh_H3(str1,fstr1,/(&lt;%(.|\n)*?%&gt;)/gim,"shPre1");
	}
	str1=cdh_H2(str1,fstr1,/(".*?")/gim,"shString1");
	str1=cdh_H2(str1,fstr1,/(&lt;.*?&gt;)/gim,"shReser1");
	return str1;
  }
  function HighLightJava(str1)
  {
	var fstr1=new Object();
	fstr1.name1=cdh_Fill0(str1);

	str1=cdh_H2(str1,fstr1,/(\/\/.*)/gim,"shCmm1");
	str1=cdh_H3(str1,fstr1,/(\/\*(.|\n)*?\*\/)/gim,"shCmm1");
	str1=cdh_H2(str1,fstr1,/(".*?")/gim,"shString1");
	str1=cdh_H2(str1,fstr1,/('.')/gim,"shString1");
	var re1=/\b(int|long|short|byte|char|float|double|boolean|void|true|false|null)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shType1");
	var re1=/\b(for|while|do|if|else|switch|case|return|break|continue|final|static|const|abstract|implements|extends|import|new|public|protected|private|class|interface|enum|try|catch|throw|throws|this|super)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shReser1");
	var re1=/\b(System|out|in|gc|print|println|Object|Class|Math|Runtime|Thread|Character|String|StringBuffer|Integer|Double|Float|Long|Boolean|Byte|Error|Exception|IOException|RuntimeException)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shCommon1");

	return str1;
  }
  function HighLightJS(str1)
  {
	var fstr1=new Object();
	fstr1.name1=cdh_Fill0(str1);

	str1=cdh_H2(str1,fstr1,/(\/\/.*)/gim,"shCmm1");
	str1=cdh_H3(str1,fstr1,/(\/\*(.|\n)*?\*\/)/gim,"shCmm1");
	str1=cdh_H2(str1,fstr1,/(".*?")/gim,"shString1");
	str1=cdh_H2(str1,fstr1,/('.')/gim,"shString1");
	var re1=/\b(for|in|while|do|if|else|switch|case|return|break|continue|new|delete|typeof|void|instanceof|var|function|try|catch|throw|throws|this)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shReser1");
	var re1=/\b(RegExp|Array|Date|Boolean|Dictionary|Enumerator|FileSystemobject|Error|Global|Math|Number|object|String)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shCommon1");
	return str1;
  }
  function HighLightCSharp(str1)
  {
	var fstr1=new Object();
	fstr1.name1=cdh_Fill0(str1);

	str1=cdh_H2(str1,fstr1,/(\/\/.*)/gim,"shCmm1");
	str1=cdh_H3(str1,fstr1,/(\/\*(.|\n)*?\*\/)/gim,"shCmm1");
	str1=cdh_H2(str1,fstr1,/(".*?")/gim,"shString1");
	str1=cdh_H2(str1,fstr1,/('.')/gim,"shString1");
	var re1=/\b(int|uint|long|ulong|short|ushort|sbyte|byte|char|decimal|float|double|bool|void|true|false|string)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shType1");
	var re1=/\b(abstract|event|new|struct|as|explicit|switch|base|extern|this|operator|throw|break|finally|out|fixed|override|try|case|params|typeof|catch|for|private|foreach|protected|checked|goto|public|unchecked|class|if|readonly|unsafe|const|implicit|ref|continue|in|return|using|virtual|default|interface|sealed|volatile|delegate|internal|do|is|sizeof|while|lock|stackalloc|else|static|enum|var)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shReser1");
	var re1=/\b(System|out|in|gc|print|println|Object|Class|Math|Runtime|Thread|Character|String|StringBuffer|Integer|Double|Float|Long|Boolean|Byte|Error|Exception|IOException|RuntimeException)\b/gm;
	str1=cdh_H2(str1,fstr1,re1,"shCommon1");

	return str1;
  }
