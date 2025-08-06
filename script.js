const inputName = document.getElementById('inputName')
const inputPassword = document.getElementById('inputPassword')
const sentBtn = document.getElementById('sentBtn')


let accauntStydent = [
        {
        stydentId: 1110,
        stydentPassword: 2021,
        stydentName: 'xamidulla',
        stydentGroup: 'NF2074',
        stydentGrading:3

    },
    {
        stydentId: 1107,
        stydentPassword: 2017,
        stydentName: 'figmachi🧟‍♀️',
        stydentGroup: 'NF2074',
        stydentGrading : 2

    },

]
sentBtn.addEventListener('click', () => {
    const userId = Number(inputName.value); // Raqamga aylantirdik
    const userPassword = Number(inputPassword.value);

    const foundStudent = accauntStydent.find(student =>
        student.stydentId === userId && student.stydentPassword === userPassword
    );

    if (foundStudent) {
        alert('Siz: ' + foundStudent.stydentName);
        localStorage.setItem('student' , JSON.stringify(foundStudent))
        window.location.href = 'home.html'
    } else { 
        alert('Login yoki parol noto‘g‘ri!');
    }
});
