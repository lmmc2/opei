import React, {Component} from 'react';
import Section from './../components/Section';
import Accordion from './../components/AccordionCustom';
import Navbar from './../components/Navbar';
import TopBanner from './../components/TopBanner';
import { HashLink as Link } from 'react-router-hash-link';

export default class FAQ extends Component{
	render(){
		const items = [
			{
				title: <p>Quando começam as inscrições dos alunos?</p>,
				content: <p>Já começaram! Você pode se inscrever clicando <a href="https://opei.cin.ufpe.br/2018">aqui</a>!</p>
			},
			{
				title: <p>Sou um aluno. O que preciso para poder me inscrever na OPEI?</p>,
				content: <p> É necessário que o colégio no qual você está matriculado tenha um professor responsável. Esse professor precisa inscrever o colégio durante o período de inscrições. Só após o professor ter inscrito o colégio e o período de inscrições dos alunos terem começado o aluno poderá se inscrever.</p>
			},
			{
				title: <p>Posso me inscrever em duas modalidades (teórica e prática)?</p>,
				content: <p>Não, as provas de todas as modalidade são realizadas paralelamente sendo impossível você realizar as provas de ambas.</p>
			},
			{
				title: <p>Sou aluno de uma escola técnica. Minha escola pode participar?</p>,
				content: <p>Na OPEI apenas são aceitas as escolas técnicas com o ensino médio integrado. Se seu curso é integrado, basta pedir a um professor que inscreva o colégio e você poderá se inscrever normalmente.</p>
			},
			{
				title: <p>Quanto tempo eu tenho para fazer a prova teórica?</p>,
				content: <p>O tempo de duração é de 3 horas, contadas a partir da autorização do fiscal de sala para início da prova.</p>
			},
			{
				title: <p>Quantas questões tem as provas teóricas?</p>,
				content: <p>As provas teóricas são divididas em 5 blocos de 4 questões cada, totalizando 20 questões. As questões são fechadas e o aluno precisa preencher um gabarito.</p>
			},
			{
				title: <p>Quais são os assuntos que englobam a prova teórica?</p>,
				content: <p>As provas teóricas não exigem nenhum conhecimento especial. As tarefas abordam problemas de Lógica com conceitos básicos de Aritmética e Geometria, e são feitas com lápis e papel. Apesar de não necessitarem de conhecimento anterior, a prática com tarefas de anos anteriores ajuda a obter melhores resultados. Uma fonte de estudo e treinamento é o livro Jogos de Lógica, escrito pelo prof. Wellington Santos Martins, do Instituto de Informática da Universida Federal de Goiás.</p>
			},
			{
				title: <p>Quanto tempo eu tenho para fazer a prova prática?</p>,
				content: <p>O tempo de duração é de 4 horas, contadas a partir do início da prova na sala do aluno.</p>
			},
			{
				title: <p>Quantas questões tem a prova prática?</p>,
				content: <p>A prova prática é composta por 10 questões, cada uma com um conjunto de casos teste, entrada e saída esperada. Toda questão possui uma descrição do problema, especificação da entrada, especificação da saída, e exemplos de caso teste.</p>
			},
			{
				title: <p>Quais são os assuntos que englobam a prova prática?</p>,
				content: <p>É necessário que haja conhecimento prévio de alguma linguagem de programação. As provas serão feitas de forma que com os conteúdos de Lógica, Aritmética, e Geometria seja possível resolver todas as tarefas de forma completa. Em breve iremos realizar warmups para que você possa treinar para a prova prática.</p>
			},
			{
				title: <p>Como a prova prática é corrigida?</p>,
				content: <p>O participante irá submeter o código-fonte da sua solução no sistema de prova, informando a linguagem. Então o sistema irá compilar o código e executá-lo, e para cada caso teste será dada a entrada via stdin e irá se comparar a resposta produzida em stdout com a solução. Toda a produção em stderr é ignorada e não interfere na correção do problema. Lembre-se: a correção de cada questão é feita com base em centenas de casos testes, a maioria deles não estão presentes na sua prova. Portanto, não basta escrever um código que funcione para os casos testes de exemplo da sua prova. É preciso que seu código funcione bem para qualquer caso de entrada possível.</p>
			},
			{
				title: <p>Em quais linguagens eu posso resolver as questões na prova prática?</p>,
				content: <p>C 11, C++ 14, Java 8, Python 2, e Python 3.</p>
			},
			{
				title: <p>Terei acesso à documentação das linguagens de programação durante a prova?</p>,
				content: <p>Sim, no ambiente de prova você terá acesso a toda a documentação das linguagens de programação especificadas.</p>
			},
			{
				title: <p>O que posso levar no dia da prova?</p>,
				content: <p>No dia da prova será permitido o uso somente de: lápis, borracha, apontador, e régua. O aluno também poderá levar bebidas e alimentos para consumo durante a prova. Não será permitido o uso de calculadoras ou qualquer outro equipamento eletroeletrônico. Caso o aluno esteja portando qualquer objeto não permitido, ele deverá informar ao fiscal de sala para que haja o recolhimento do objeto e sua devolução após o fim da prova.</p>
			},
			{
				title: <p>Quem elabora as provas?</p>,
				content: <p>Os próprios membros do <a target="_blank" rel="noopener noreferrer" href="https://pet.cin.ufpe.br">PET-Informática</a> elaboram as provas da OPEI. É feito um banco de dados de questões durante o primeiro semestre do ano e, após isso, ocorre a montagem da prova. Então, há uma revisão gramatical e técnica feita por terceiros.</p>
			},
			{
				title: <p>Há alguma premiação para os melhores colocados?</p>,
				content: <p>O PET-Informática promove, todo mês de janeiro no Centro de Informática, um curso gratuito em Python para iniciantes (<a rel="noopener noreferrer" target="_blank" href="https://pet-informatica.github.io/programa-de-ferias/#/">Curso de Férias</a>) no qual os alunos premiados da OPEI terão prioridade na inscrição. Além disso os mais bem colocados de cada modalidade irão receber medalhas. Todos os participantes da OPEI recebem certificado de participação.</p>
			},
		];
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="perguntas-frequentes"/>
					<Section title="Perguntas Frequentes">
						<p className="index-sectionText" style={{marginBottom: "40px"}}>Tem alguma dúvida? Veja se encontra a resposta aqui! Caso contrário, entre em <Link to="/#contato">contato</Link> conosco! </p>
						<Accordion items={items}/>
					</Section>
				</div>
			</Navbar>
		);
	}
}
