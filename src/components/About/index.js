import Content from 'ui/Content';
import Text from 'ui/Text';
import List from 'ui/List';
import ListItem from 'ui/ListItem';
import Divider from 'ui/Divider';

export default class About extends BaseComponent {
  render() {
    let props = {
      id: 'about',
      title: 'Front-in Santa Maria',
      description: 'o que é o evento?',
      icon: 'question'
    };

    return (
      <Content {...props}>
        <Text>
          Front-end é um termo utilizado, no desenvolvimento Web, que define toda a parte de apresentação visual de uma página/app.
          Dentro da área de front está a aplicação de um <em>design</em>, o modo como um conteúdo é apresentado e também a estruturação da informação em um site.
          Os documentos (páginas) apresentados pelos <em>browsers</em> são desenvolvidos com HTML, CSS e JavaScript.
        </Text>

        <Divider />

        <Text>
          Mas trabalhar com Front-end não é somente "programar".
          Existem profissionais que são responsáveis por outras atividades não menos importantes que escrever código.
          No front-end é onde se pensa no SEO (<em>search engine optimization</em>) e em como é organizado o conteúdo de uma página para melhor posicionar sites em motores de busca (Google, Yahoo, Bing etc).
          Além disso, também existem os profissionais preocupados com acessibilidade.
          Estes, organizam conteúdo com a finalidade de facilitar o acesso a este material, a qualquer usuário.
        </Text>

        <Divider />

        <Text>
          O Front-in SM (Santa Maria) foi criado com a finalidade de reunir o maior número possível de profissionais interessados em trocar conhecimento sobre tecnologias Front-End.
          E não só isso:
        </Text>

        <List>
          <ListItem>Se você é estudante e ainda não atua profissionalmente, venha ver com o que o mercado está trabalhando</ListItem>
          <ListItem>Se você é dev Back-End e quer aprender mais sobre o outro lado da moeda, estaremos de portas abertas para recebê-lo</ListItem>
          <ListItem>Se você é apenas um curioso, não tem problema. Tentaremos ao máximo fazer você se sentir em casa</ListItem>
          <ListItem>Caso você seja um empresário ou empreendedor, venha captar talentos. O evento estará cheio de desenvolvedores esperando uma oportunidade de fazer a diferença</ListItem>
        </List>

        <Text>
          Venha trocar uma ideia no maior evento Front-End do interior do Rio Grande do Sul. O Front-in SM está aguardando por você.
        </Text>
      </Content>
    );
  }
}
