const coach = document.querySelector('#workexp-coach')
const pnc = document.querySelector('#workexp-pnc')
const alp = document.querySelector('#workexp-alp')

document.querySelector('#workexp-coach').addEventListener('click', coachText)
document.querySelector('#workexp-pnc').addEventListener('click', pncText)
document.querySelector('#workexp-alp').addEventListener('click', alpText )

function coachText(){
	alp.classList.add('hidden')
	pnc.classList.add('hidden')
	coach.classList.toggle('hidden')
}

function pncText(){
	coach.classList.add('hidden')
	alp.classList.add('hidden')
	pnc.classList.toggle('hidden')
}

function alpText(){
	pnc.classList.add('hidden')
	coach.classList.add('hidden')
	alp.classList.toggle('hidden')
}
