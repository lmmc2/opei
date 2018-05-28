import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import Section from './../components/Section';
import OldExams from './../components/OldExams';
import Navbar from './../components/Navbar';
import TopBanner from './../components/TopBanner';
import VideoMenu from './../components/VideoMenu';
import GenericMenu from './../components/GenericMenu';
import '../css/practice.css';

export default class PracticeC extends Component {
	render(){
		const exams = [
            {
                year: "2017",
                modality: "Modalidade C - Prática",
                description: "Ensino Médio",
                exam: "https://drive.google.com/file/d/190PcneDp7lcbX7DJDkw-9XyVUdSZzwnV/view?usp=sharing",
            },
            {
                year: "2016",
                modality: "Modalidade D - Prática",
                description: "Ensino Médio",
                exam: "https://drive.google.com/file/d/1ZPuUhRgJRikO3f95nI5eijNjADsulv3H/view?usp=sharing",
            },
            {
                year: "2015",
                modality: "Modalidade B - Prática",
                description: "Ensino Médio",
                exam: "https://drive.google.com/file/d/1Hlp6nMni0w6iwX99VB_iXaXnOSlx-EDk/view?usp=sharing",
            },
		];
		const playlist = [
			{
				key: "video1",
				title: "Lógica de Programação - Curso em Vídeo",
				videos: [
					"8mei6uVttho",
					"M2Af7gkbbro",
					"RDrfZ-7WE8c",
					"Ig4QZNpVZYs",
					"GrPkuk1ezyo",
					"v2nCgGSVCeE",
					"_g05aHdBAEY",
					"7gGFHzqh4d8",
					"U5PnCt58Q68",
					"fP49L1i_-HU",
					"WJQz20i7CyI",
					"KoNehy7rn8U",
					"-nNx7e8GzHQ",
					"j9473xQ39vY",
					"hkE9WrjpAAk",
				],
			},
			{
				key: "video2",
				title: "Lógica de Programação - Me Salva!",
				videos: [
					"ntBxoTSnfkA",
					"x53DQvlROnA",
					"bKef0ZvQyLs",
					"YqCszDJREeo",
					"bzZosQMiIp8",
					"TQmu_3h0e-0",
					"JhA-oR5ZJs8",
					"YEee8TattRo",
					"a_AHYgzU7Tw",
					"7RR5eAPb8UM",
					"4yVCGgEE9bc",
					"3FD8a4e9OdA",
					"pzZn_FdYsTc",
				],
			},
			{
				key: "video3",
				title: "Programação em C - Me Salva!",
				videos: [
					"MIzsyY505uo",
					"LEr735iHmxE",
					"Ij8j5jyvAAs",
					"M-HOcajorTg",
					"8VLtBdhTwlE",
					"fGtgh6Lpw4s",
					"wUoSN8mWvUY",
					"ze6TsNMwipA",
					"Zd-N4XDHEPY",
					"jj7-wl8mgjw",
					"umTyQAY-qHU",
					"TeG1q2vBmuc",
					"Eo4tMZ00VaA",
					"niTmi2OiCto",
					"D5QvQmes198",
					"4d0FI0GamF4",
					"jUXM_g77CwI",
					"nb_ONgqryOc",
					"8t-MZc6RpM8",
					"kS_VJYWeqIQ",
				],
			},
			{
				key: "video4",
				title: "Programação em Python - IME/USP",
				videos: [
					"WT_zCgSHSTQ",
					"rh65Lh5V7S0",
					"6RdMCmnosRY",
					"SqLhPI6pPy4",
					"LN8ejPwSzkU",
					"tqF0MjcOqcI",
					"r8CSesZpFjo",
					"UZ7_oudJ150",
					"sZg9nrUTgJE",
					"ECFj-bWzU8I",
					"sgfmuFRZuWs",
					"ngeVlLJ250s",
					"v_QoUdfahng",
					"TllYO06DpUk",
					"RBjrLgdMaMI",
					"Aa8-39qwbUU",
					"AMUxtcJ8yfc",
					"se9JcK05PGw",
					"c_5UByqX6kE",
					"eGH9--FcDxY",
					"GhWEOe81bJw",
					"pYgAX8BuJN8",
					"dRCDOH1lugs",
					"pbzea8fXj98",
					"9AUu2xjOACI",
					"Wcug8mjU8Sg",
					"krVca97F13I",
					"ctmPwp52b7w",
					"LrXapVI66so",
					"4TN8IdsJ78k",
					"c9yjwWNiNQw",
					"EpvCXjuHifg",
					"DdhNltkI_hE",
					"EWQTdbtCtKw",
					"eH5kd48NfM0",
					"6rSUPRZJFRM",
					"x_hNj2C-kVs",
					"gCKza8cYdJY",
					"frtaUi3B6Sc",
					"LsbakVX54RY",
					"RYpV10216pw",
					"bsFhgaaHeV4",
					"a06rEkp7rNw",
					"JggjFK5PkMs",
					"tN-PwzkKcsk",
					"gW6PUkzkIUw",
					"NDUbLp1Ro2Q",
					"kh3pKfh8TYU",
					"NxriUYWxoEU",
					"AyPJx1RIDuY",
					"386wQ0bP9vw",
					"rj8Sqsgh5TM",
					"DRfEY-qzyvk",
					"SXA58yKo9IY",
					"HQ2q8-EmUCs",
				],
			},
		];
		const courses = [
			{
				key: "course1",
				title: "Introdução à Computação - Programaê!",
				content: <div className="practice-menuContainer">
							<p className="index-sectionText">O curso <a href="https://www.coursera.org/learn/programae">"Aprenda a ensinar programação com o Programaê!"</a> tem como objetivo apoiar professores no desenvolvimento de suas aulas com o <a href="https://programae.org.br">‘Programaê!’</a>, um movimento que quer aproximar a programação do cotidiano de jovens de todo o Brasil por meio de um portal prático, agregador de ideias, soluções, dicas e planos de aula estruturados para professores.</p>
							<p className="index-sectionText">Você não precisa ser programador ou entender de programação para fazer este curso! Nosso público-alvo são profissionais da educação (formal e não formal) que desejam desenvolver o pensamento lógico computacional de crianças, jovens e adultos utilizando os planos de aula do Programaê!</p>
							<br/><br/><Button href="https://www.coursera.org/learn/programae" secondary>Começar!</Button>
						</div>,
			},
			{
				key: "course2",
				title: "Introdução à Programação - OBI",
				content: <div className="practice-menuContainer">
							<p className="index-sectionText">Curso destinado a iniciantes, sem experiência em programação de computadores. O curso tem foco na resolução de problemas usando o computador, e utiliza a linguagem de programação Javascript.</p>
							<p className="index-sectionText">O <a href="https://olimpiada.ic.unicamp.br/saci">Saci</a> é um ambiente de aprendizagem desenvolvido para o ensino de programação.</p>
							<br/><br/><Button href="https://olimpiada.ic.unicamp.br/saci" secondary>Começar!</Button>
						</div>,
			},
			{
				key: "course3",
				title: "Programação em Python - CodeAcademy",
				content: <div className="practice-menuContainer">
							<p className="index-sectionText">O Python é uma linguagem de programação fácil de aprender. Você pode usá-la para criar apps web, jogos, e até mesmo um sistema de buscas! Pronto para aprender Python? Basta <a href="https://www.codecademy.com/pt-BR/tracks/python">acessar</a> o curso!</p>
							<br/><br/><Button href="https://www.codecademy.com/pt-BR/tracks/python" secondary>Começar!</Button>
						</div>,
			},
		];
		const exercices = [
			{
				key: "exercice1",
				title: "Questões de Olimpíadas - CodCad",
				content: <div className="practice-menuContainer">
							<h2>Tornando o difícil fácil</h2>
							<p className="index-sectionText">O <a href="https://www.codcad.com">CodCad</a> possui aulas para iniciantes que irão garantir seu aprendizado sólido de maneira simples dos primeiros passos em programação. Livros, muitas vezes, acabam sendo caros e desatualizados, o que inviabiliza o aprendizado de muitos. Nossas aulas completas e correção automática de códigos lhe ajudarão dominar o assunto e praticar quantas vezes quiser.</p>
							<br/><br/><Button href="https://www.codcad.com/problems" secondary>Quero Treinar!</Button>
						</div>,
			},
			{
				key: "exercice2",
				title: "Questões de Olimpíadas - OBI",
				content: <div className="practice-menuContainer">
							<h2>Olimpíada Brasileira de Informática</h2>
							<p className="index-sectionText">A <a href="https://olimpiada.ic.unicamp.br">OBI</a> possui ótimos recursos para praticar no mundo da computação! Desde o nível teórico até a modalidade prática, realizar os exercícios dela vai te ajudar muito à praticar para a OPEI!</p>
							<br/><br/><Button href="https://olimpiada.ic.unicamp.br/pratique/" secondary>Quero Treinar!</Button>
						</div>,
			},
		];
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="prova-pratica"/>
					<Section title="PROVA PRÁTICA">
						<p className="index-sectionText">Quer estudar para a prova prática? Não importa se você já tem experiência com computação, ou se nunca programou na vida, aqui é o lugar para começar! Abaixo, organizamos alguns recursos que podem te ajudar nessa jornada. Boa sorte!</p>
					</Section>
					<Section title="VIDEO AULAS">
						<VideoMenu items={playlist}/>
					</Section>
					<Section title="CURSOS ONLINE">
						<GenericMenu items={courses}/>
					</Section>
					<Section title="EXERCÍCIOS E PROBLEMAS">
						<GenericMenu items={exercices}/>
					</Section>
					<div className="index-anchor" id="provas-antigas"/>
					<Section id="provas-antigas" title="PROVAS ANTIGAS">
						<OldExams exams={exams}/>
					</Section>
				</div>
			</Navbar>
		);
	}
}
