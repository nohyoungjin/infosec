str = ''
str += '<div id="header">'

if ($('body').hasClass("home")) {
	str += '<div class="h_group">'
} else {
	str += '<div class="h_group sub">'
}

str += '		<div>'
str += '			<h1><a href="index.html" class="logo_link"><span class="blind">SK infosec</span></a></h1>'
str += '			<a href="#offcanvas" class="btn_offcanvas"><span>전체메뉴 열기</span></a>'
str += '			<div id="gnb">'
str += '				<button type="button" class="btn_offcanvas_close">전체메뉴 닫기</button>'
str += '				<ul>'
str += '					<li>'
str += '						<a href="#none"><span>사업소개</span></a>'
str += '						<div class="sub_menu">'
str += '							<div class="inner">'
str += '								<ul>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">Platform Services</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="secudium.html">Secudium Platform</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">Expert Services</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="Consulting.html">보안 컨설팅</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">Industries</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="highTech.html">하이테크 / 제조</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">Products</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="WebMalware.html">웹 악성코드 탐지/대응</a></li>'
str += '													<li><a href="Partner.html">Partner Products</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '								</ul>'
str += '							</div>'
str += '						</div>'
str += '					</li>'
str += '					<li>'
str += '						<a href="#none"><span>회사소개</span></a>'
str += '						<div class="sub_menu">'
str += '							<div class="inner">'
str += '								<ul>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">회사개요</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="intro.html">Overview</a></li>'
str += '													<li><a href="visionAndValue.html">Vision</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">기업문화</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="culture.html">기업문화</a></li>'
str += '													<li><a href="ethicalManagement.html">윤리경영</a></li>'
str += '													<li><a href="fairTrade.html">공정거래</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										 <ul>'
str += '											<li class="item"><a href="#none">채용</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="talent.html">HR제도</a></li>'
str += '													<li><a href="upbringingSystem.html">육성체계</a></li>'
str += '													<li><a href="jobIntro.html">직무소개</a></li>'
str += '													<li><a href="benefits.html">복리후생</a></li>'
str += '													<li><a href="careers.html">채용공고</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '								</ul>'
str += '							</div>'
str += '						</div>'
str += '					</li> '                        
str += '					<li>'
str += '						<a href="#none"><span>News Room</span></a>'
str += '						<div class="sub_menu">'
str += '							<div class="inner">'
str += '								<ul>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">SK인포섹 뉴스</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="skInfosecNews_list.html">SK인포섹 뉴스</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">뉴스레터</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="newsletters_list.html">뉴스레터</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">EQST Insight</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="eqstInsight_list.html">EQST Insight</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '									<li>'
str += '										<ul>'
str += '											<li class="item"><a href="#none">Video</a></li>'
str += '											<li class="two_depth">'
str += '												<ul>'
str += '													<li><a href="video_list.html">Video</a></li>'
str += '												</ul>'
str += '											</li>'
str += '										</ul>'
str += '									</li>'
str += '								</ul>'
str += '							</div>'
str += '						</div>'
str += '					</li>'
str += '					<li class="last">'
str += '						<a href="javascript:"><span>블로그</span></a>'
// str += '						<div class="sub_menu">'
// str += '							<div class="inner">'
// str += '								<ul>'
// str += '									<li>'
// str += '										<ul>'
// str += '											<li class="item"><a href="#none">블로그</a></li>'
// str += '											<li class="two_depth">'
// str += '												<ul>'
// str += '													<li><a href="#none">블로그</a></li>'
// str += '												</ul>'
// str += '											</li>'
// str += '										</ul>'
// str += '									</li>'
// str += '								</ul>'
// str += '							</div>'
// str += '						</div>'
str += '					</li>'
str += '				</ul>'
str += '			</div>'

str += '			<div class="search_area">'
str += '				<div class="sizing_wrap">'
str += '					<form method="post" name="">'
str += '						<fieldset>'
str += '							<legend>검색</legend>'
str += '							<input type="text" name="" id="inp_search" placeholder="검색어를 입력하세요.">'
str += '							<a href="search.html" class="btn_search"><span>검색</span></a>'
str += '							<a href="javascript:" class="btn_cl"><span>검색 닫기</span></a>'
str += '						</fieldset>'
str += '					</form>'
str += '				</div>'
str += '			</div>'

str += '		</div>'
str += '	</div>'
str += '</div>'

document.write(str);