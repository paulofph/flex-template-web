import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Última Actualização: 09 de Outubro, 2019</p>

      <p>
        POR FAVOR, LEIA ESTES TERMOS e CUIDADOSAMENTE, pois eles contêm informações importantes sobre seus direitos legais, recursos e obrigações. AO CONCORDAR COM ESTES TERMOS, VOCÊ RECONHECE QUE LEU E COMPREENDEU QUE ESTÁ DE VINCULAÇÃO A UM ACORDO LEGAL ENTRE VOCÊ E A B'POOL. Se aceita ou concordar com estes termos em nome de uma empresa ou outra entidade legal, você declara e garante que tem autoridade para vincular essa empresa ou outra entidade legal a estes termos. Se não concorda com estes termos, você não poderá acessar ou utilizar os Serviços da Bpool.
      </p>
      <p>
        Em caso de alguma dúvida ou outra questão, não hesite em contactar-nos através das redes sociais ou do e-mail info@thebpool.com.
      </p>

      <h2>I. Definições </h2>
      <p>
        - “Bpool”, “bpool company” representa um empresa, signada por WORDERFUL FORMULA - UNIPESSOAL LDA, com o número de contribuinte 515509825, com sede na Rua Casa Benzedor, 973, 2440-234 Batalha.
      </p>
      <p>
        - “Plataforma”, “Portal”  significa o marketplace acessível no endereço www.thebpool.com que constitui a plataforma que permite aos proprietários de piscinas alugar o acesso à sua piscina aos utilizadores do marketplace. A Bpool  é um serviço de ligação, oferece o serviço de reserva. Assim, aquando a existência de uma reserva, a bpool age unicamente como intermediário entre o utilizador e o anfitrião, sendo que a relação jurídica do aluguer/acesso é entre o utilizador e o anfitrião, nunca entre a bpool e o  proprietário/utilizador.
      </p>
      <p>
        - “Utilizador”, “usuário”, “Banhista” significa qualquer visitante do site acessível no seguinte endereço: www.thebpool.com. O utilizador poderá criar uma conta de usuário para a realização de reservas de piscina. É também através da conta de utilizador, que o proprietário poderá tornar-se anfitrião, colocando um anúncio da piscina. 
      </p>
      <p>
        - “Anfitrião”, “proprietário”, “anunciante” significa o usuário que disponibiliza a piscina para alugar na Plataforma, sendo esta localizada numa propriedade/estabelecimento da qual ele tenha plenos direitos.        
      </p>
      <p>
        - "Anúncio" significa a publicação de uma piscina que o utilizador colocou na Plataforma para aluguer. 
      </p>
      <p>
        - “reserva” significa o acordo comercial estabelecido entre o anfitrião e o utilizador para utilização da piscina. 
      </p>
      <p>
        - “Piscina” - local objeto de reserva, cujo é oferecido pelo anfitrião e no qual o usuário com reserva pretende usufruir do serviço de aluguer
      </p>

      <h2>II. Condições de uso da plataforma</h2>
      <p>
        Qualquer acesso e/ou uso do Site implica a aceitação sem reservas e a conformidade com todos os termos destes Termos e Condições.
        Podem ser complementados, quando apropriado, por condições de uso específicas de determinados Serviços. Em caso de contradição, as condições especiais prevalecem sobre as Condições Gerais.
        A plataforma <a href='https://www.thebpool.com/'>B'pool</a> é uma marketplace online de piscinas que permite aos proprietários o aluguer das piscinas durante uma manhã, tarde ou dia inteiro aos utilizadores da plataforma. Plataforma é gerida pela Bpool e atua como intermediária entre os anfitriões e os utilizadores. A bpool fornece uma plataforma on-line pela qual os anfitriões anunciam, vendem e promovem os serviços de reserva de piscina, permitindo aos utilizadores pesquisar, comparar e reservar o acesso a uma piscina. Após a reserva, a bpool age unicamente como intermediário entre o utilizador e o anfitrião, transmitindo a confirmação da reserva e outras informações importantes em nome do anfitrião. A bpool não oferece, aluga ou comercializada qualquer serviço de aluguer de piscinas. 
      </p>

      <h2>III. Anúncios</h2>
      <p>
        As informações que a Bpool divulga nos anúncios tem como fonte informações divulgadas e inseridas pelos anfitriões. Ao realizar a inscrição no portal, os anfitriões garantem o direito de inserir os dados relativamente aos seus anúncios. Assim, os anfitriões são totalmente responsáveis por atualizar as informações sobre a piscinas, nomeadamente as regras, caraterísticas, comodidades, preços, tarifas , disponibilidades e outras informações. 
      </p>
      <p>Os anfitriões comprometem-se:</p>
      <ol>
        <li>
          <p>a colocar piscinas que tenham plenos direitos da sua utilização;</p>
        </li>
        <li>
          <p>à veracidade das informações colocadas nos anúncios;</p>
        </li>
        <li>
          <p>a que as suas piscinas cumpram com toda a legislação de construção, utilização e segurança;</p>
        </li>
        <li>
          <p>a realizar a manutenção da piscina, incluindo a filtragem e tratamento da água de acordo com a legislação em vigor;</p>
        </li>
        <li>
          <p>a confirmar ou recusar os pedidos de reserva efetuados;</p>
        </li>
        <li>
          <p>a receber os usuários de acordo com as reservas efectuadas;</p>
        </li>
        <li>
          <p>a não cobrar qualquer outro valor adicional para a utilização da piscina, podendo cobrar outros valores por serviços meramente opcionais;</p>
        </li>
        <li>
          <p>No caso dos anfitriões de casas particulares, a não comercializar o serviço promovido na bpool em qualquer outra plataforma ou de forma individual e direta com os clientes. Caso aconteça, os proprietários de casas particulares concordam em pagar uma indemnização à Bpool igual a 100 vezes o tarifa de adulto (dia completo) definido no anúncio.</p>
        </li>
      </ol> 


      <h2>IV. Responsabilidades</h2>
      <p>
        A Bpool não se responsabilidade pelo uso, veracidade, validade e qualidade do anúncio, reserva ou qualquer outro serviço fruto da oferta de serviços disponíveis na plataforma. Os utilizadores e os anfitriões reconhecem e concordam que o Anfitrião é responsável e assume toda a responsabilidade da oferta do aluguer/acesso à piscina e outros serviços . 
      </p>
      <p>
        A Bpool não é responsável e se isenta de qualquer responsabilidade no caso de reclamações, solicitações e responsabilidade dos serviços.
      </p>
      <p>
        É proibido qualquer uso do conteúdo disponível na Plataforma de forma ilegal ou de forma a prejudicar a Bpool, os Usuários e os anfitriões. 
      </p>
      <p>
        A bpool não oferece, aluga ou comercializada o serviço de aluguer de piscinas ou qualquer outro serviço de aluguer com o utilizador. A bpool atua como intermediário entre o utilizador que pretende usufruir do serviço e o anfitrião, apenas com responsabilidade na questão do pagamentos efectuado através do serviço disponibilizado na plataforma. O pagamento efectuado pelo utilizador apenas é debitado após a confirmação da reserva pelo anfitrião.
      </p>
      <p>
      A Bpool reserva-se ao direito de:
      </p>
      <ul>
        <li>
          <p>- remover sem aviso prévio qualquer anúncio que poderá infringir disposições legais, conteúdo ilegal ou a politica da Bpool; </p>
        </li>
        <li>
          <p>- suspender o serviço ou acesso à plataforma a qualquer momento e de forma contínua;</p>
        </li>
        <li>
          <p>- mudar e alterar o aspeto/funcionalidades da plataforma</p>
        </li>
      </ul>

      <p>
        A Bpool, em momento algum, responsabiliza por qualquer incidente ou acidente ocorrido na utilização da piscina ou qualquer outro equipamento, seja ele provocado pela utilização da piscina ou outra comodidade do anfitrião.  Recorda-se mais uma vez que que a Bpool atua como intermediária entre o utilizador e o anfitrião, permitindo e facilitando uma relação entre o usuário e o anfitrião.
      </p>

      <p>O utilizador no momento da utilização da piscina, compromete-se a:</p>
      <ol>
        <li>
          <p>Usar a piscina, equipamentos e restantes comodidades de forma responsável e de acordo com os princípios de segurança;</p>
        </li>
        <li>
          <p>Não estragar ou danificar qualquer equipamento, material ou outra comodidade. O utilizador é inteiramente responsável pela suas ações e pelos danos causados;</p>
        </li>
        <li>
          <p>Manter sempre as crianças sob a vigilância permanente e efetiva de um adulto. Utilize equipamentos de segurança como bóias, coletes ou outro auxiliar de flutuação;</p>
        </li>
        <li>
          <p>Não deixar as crianças sozinhas dentro ou perto da piscina;</p>
        </li>
        <li>
          <p>Em caso de acidente, ligar para o 112 e seguir as instruções indicadas;</p>
        </li>
        <li>
          <p>Verificar sempre antes de qualquer mergulho a profundidade da piscina;</p>
        </li>
      </ol>

      <h2>V. Utilizador</h2>
      <p>O usuário declara ter mais de 18 anos de idade.</p>
      <p>
        Se o utilizador registra em uma capacidade profissional, ele reconhece ter a autoridade e o poder legal para vincular a entidade em cujo nome ele está agindo.
      </p>
      <p> 
        O utilizador garante fornecer informações precisas e justas e atualizar essas informações em caso de alterações.
      </p>
      <p>
        Os identificadores usados ​​para criar uma conta de usuário devem respeitar a ordem pública e os direitos de terceiros. Inclua identificadores proibidas pornográficos, racistas, violentos, e os IDs de empréstimos obtidos ou a recolha de uma marca, e em geral todos os termos ou frases que possam prejudicar os direitos de terceiros.
      </p>
      <p>
        O usuário concorda em garantir que as credenciais declaradas para esses serviços de autenticação sejam precisas e atualizá-las da mesma maneira.
      </p>
      <p>
        A conta de usuário permite:
      </p>
      <ul>
        <li>
          <p>- Aceder aos anúncios de outros usuários;</p>
        </li>
        <li>
          <p>- Realizar reservas;</p>
        </li>
        <li>
          <p>- Criar um anúncio e torna-se anfitrião;</p>
        </li>
        <li>
          <p>- Entrar em contato com outros usuários</p>
        </li>
        <li>
          <p>- Aceder à lista de empresas parceiras</p>
        </li>
        <li>
          <p>- Entrar em contato com a B´pool. </p>
        </li>
      </ul>

      <p>
        A utilização da plataforma não tem qualquer custo para o usuário, podendo fechar a sua conta sem qualquer aviso prévio ou custo. A usuário que também se torne anfitrião não terá qualquer custo para colocar o anúncio. Apenas pagará uma percentagem das reservas efetuadas e confirmadas, publicidade e outros serviços opcionais.
      </p>
      <p>
        A Bpool reserva-se o direito, sem aviso prévio ou compensação, de fechar temporária ou permanentemente uma Conta de Usuário, particularmente no caso de violação destes Termos pelo Usuário.
      </p>

      <h2>VI. Anúncio</h2>
      <p>
        O Usuário que pretende tornar-se anfitrião reconhece e concorda expressamente que os Anúncios, que podem conter informações pessoais que ele publica de sua Conta de Usuário, podem ser acessados ​​por qualquer pessoa que acesse a Plataforma.
      </p>
      <p>
        Cada anúncio deverá conter as seguintes informações:
      </p>
      <ol>
        <li>
          <p>Localização do imóvel;</p>
        </li>
        <li>
          <p>Descrição da piscina;</p>
        </li>
        <li>
          <p>Tipo de propriedade;</p>
        </li>
        <li>
          <p>Características da piscina;</p>
        </li>
        <li>
          <p>Regras;</p>
        </li>
        <li>
          <p>Capacidade;</p>
        </li>
        <li>
          <p>Disponibilidade</p>
        </li>
      </ol>

      <p>
        As informações contidas no anúncio são da total responsabilidade do anfitrião. O anfitrião assegura que a piscina e restante propriedade estão de acordo com todas as obrigações legais de construção, funcionamento e segurança.
      </p>
      <p>
        A Bpool recomenda que os anfitrião obtenham um seguro apropriado para suas acomodações e piscinas. A Bpool não se responsabiliza por qualquer dano ocorrido no processo da utilização da piscina.
      </p>

    <h2>VII. Preço das Reservas</h2>
    <p>O preço é indicado nos anúncios dos usuários acessíveis na plataforma.</p>
    <p>Cada anfitrião define livremente o preço de seus anúncios. O preço será definido por pessoa adulta e preço de criança. </p>
    <p>Os preços são exibidos em euros, incluindo impostos portugueses/comunitários ou taxas se aplicável. O anfitrião receberá a totalidade do pagamento, processado no dia da reserva,  desconto o valor das taxas de pagamento cobradas pela <a href="https://stripe.com/en-pt/pricing">Stripe</a></p>
    <p>
      A utilização da plataforma e processo de reserva não tem qualquer custo adicional para o utilizador que pretende reservar a piscina, além do preço cobrado pelo anfitrião.
    </p>
    <p>
      A Bpool cobra uma comissão de 15%+IVA  ao anfitrião do valor da reserva efectuada. O valor será cobrada de 15 em 15 dias ou de 30 em 30 dias sobre o total de reservas pagas. 
    </p>
    <p>
      A bpool reserva ao direito de alterar as condições de facturação e modalidades, desde que comunique previamente com os anfitriões. 
    </p>
    <p>
      Os anfitriões comprometem-se a liquidar as faturas da Bpool num prazo máximo de 10 dias úteis a contar da data de recepção da fatura. 
    </p>

    <h2>VIII. Termos de pagamento</h2>
    <p>O pagamento é feito via Stripe por débito direto do número do cartão de crédito do Cliente ou pelo Débito Direto SEPA.</p>
    <p>O imposto é implementado pelo Stripe, que sozinho mantém os dados bancários do usuário. A Bpool não mantém nenhum dado bancário.</p>

    <h2>IX. Cancelamento de uma reserva</h2>
    <p>
      Apenas aluguéis com reservas confirmadas pelo anfitrião estão sujeitas estão sujeitas a esta política de cancelamento.
    </p>
    <p>
      O cancelamento de uma reserva pelo anfitrião ou pelo utilizador após a confirmação da reserva está sujeito às condições abaixo:
    </p>

    <p>
      No caso de cancelamento por parte do anfitrião:
    </p>
    <ul>
      <li>
        <p>- O anfitrião pode cancelar sem qualquer custo a mais de 12 horas do início da reserva contratualizada. A bpool não cobrará qualquer taxa;</p>
      </li>
      <li>
        <p>- Caso o anfitrião cancele a menos de 12 horas do início da reserva, será cobrada pela bpool a taxa relativamente à utilização do serviço como ela tivesse ocorrido, apesar do anfitrião não receber qualquer valor da reserva;</p>
      </li>
    </ul>

    <p>No caso de cancelamento por parte do utilizador:</p>
    <ul>
      <li>
        <p>- Antes da confirmação da reserva pelo anfitrião: sem qualquer custos para o utilizador;</p>
      </li>
      <li>
        <p>- Após a confirmação da reserva por parte do anfitrião:</p>
          <ol>
            <li>
              <p>A mais de 12 horas do início da reserva: sem qualquer custo para o utilizador;</p>
            </li>
            <li>
              <p>A mais de 12 horas do início da reserva: sem qualquer custo para o utilizador.</p>
            </li>
          </ol>
      </li>
    </ul>

    <h2>
      X. Dados pessoais
    </h2>

    <p>Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradável possível.</p>
    <p>A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o Bpool.</p>
    <p>Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem o Bpool serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</p>
    <p>A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.</p>
    <p>O uso do Bpool pressupõe a aceitação deste Acordo de privacidade. A equipa do Bpool reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</p>


    <h3>Cookie DoubleClick Dart</h3>
    <p>O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso website;
    Com o cookie DART, o Google pode exibir anúncios com base nas visitas que o leitor fez a outros websites na Internet;
    Os utilizadores podem desativar o cookie DART visitando a Política de privacidade da rede de conteúdo e dos anúncios do Google.
    Os Cookies e Web Beacons
    Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso website. Isto poderá incluir um simples popup, ou uma ligação em vários serviços que providenciamos, tais como fóruns.
    Em adição também utilizamos publicidade de terceiros no nosso website para suportar os custos de manutenção. Alguns destes publicitários, poderão utilizar tecnologias como os cookies e/ou web beacons quando publicitam no nosso website, o que fará com que esses publicitários (como o Google através do Google AdSense) também recebam a sua informação pessoal, como o endereço IP, o seu ISP, o seu browser, etc. Esta função é geralmente utilizada para geotargeting (mostrar publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou apresentar publicidade direcionada a um tipo de utilizador (como mostrar publicidade de restaurante a um utilizador que visita sites de culinária regularmente, por ex.).
    Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Virus, como o Norton Internet Security. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites. Isso poderá afetar ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras redes.
    </p>

    <h3>Ligações a Sites de terceiros</h3>
    <p>A bpool possui ligações para outros sites, os quais, a nosso ver, podem conter informações / ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a politica de privacidade do mesmo.</p>

    <p>Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.</p>

    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
