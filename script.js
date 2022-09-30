var memberList = []

function login(){
	var id = document.querySelector('#id');
	var pwd = document.querySelector('#pwd');
	var checking = 0;

	console.log(memberList);
	console.log(this.memberList)

	if(id.value == ""){
		alert("아이디를 입력해주세요.")
	}
	else if(pwd.value == ""){
		alert("비밀번호를 입력해주세요.")
	}
	else{
		for (var i = 0 ; i < this.memberList.length; i++) {
			if(id.value == this.memberList[i][0] && pwd.value == this.memberlist[i][1]){
				checking = 1
			}
		}
		if(checking == 1){
			location.href = "successLogin.html"
			alert(this.memberList[i][2]+'님 로그인에 성공하셨습니다.')
		}
		else{
			alert('아이디나 비밀번호가 잘못 입력되었습니다.\n다시 확인해주세요.');
		}
		//alert('로그인에 성공하셨습니다.');
		//location.href = "successLogin.html";
	}
}

function register(){
  var id = document.querySelector('#new_id');
	var pwd = document.querySelector('#new_pwd');
	var pwd_check = document.querySelector('#pwd_check');
	var name = document.querySelector('#new_name');
	var number = document.querySelector('#new_number');

	if(id.value == "" || pwd.value == "" || name.value == "" || number.value == "") {
		alert("정보를 입력해주세요.")
	}
	else{
		if(pwd.value != pwd_check.value) {
			alert("비밀번호를 확인해주세요.")
		}
		else{
			this.memberList.push([id.value, pwd.value, name.value, number.value])
			console.log(this.memberList[0][0])
			
			location.href = 'login.html';
		}
	}
}