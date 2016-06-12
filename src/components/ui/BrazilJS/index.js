import {ajax} from 'jquery';

export default class BrazilJS extends BaseComponent {
  constructor(props) {
    super(props);

    this.baseUrl = 'https://braziljs.org/';
    this.sponsorsUrl = this.baseUrl + 'api/list/sponsors';

    this.state = {
      sponsors: {}
    };
  }

  static defaultProps = {
    evid: ''
  }

  static propTypes = {
    evid: React.PropTypes.string.isRequired
  }

  renderSponsor(sponsor) {
    let {image, name, description, link} = sponsor;
    let {path, filename} = image;
    let publicPath = path.replace('./public/', this.baseUrl) + '/' + filename;

    return (
      <div key={filename.replace('.', 'x')} style={{padding:"0 20px"}}>
        <a href={link} target="_blank" title={name}>
          <img src={publicPath} alt={description} width="230" />
        </a>
      </div>
    );
  }

  renderCategorie(name, sponsors) {
    if (sponsors.length > 0) {
      return (
        <div key={name + 'categ'} style={{marginBottom:"20px"}}>
          <h3>{name}:</h3>
          <div>
            {sponsors.map((sponsor) => this.renderSponsor(sponsor))}
          </div>
        </div>
      );
    }
    return null;
  }

  renderCategorieList() {
    let categories = this.state.sponsors;
    let resp = [];
    let sponsors = null;
    let categorieName = null;

    for (let key in categories) {
      sponsors = categories[key];
      categorieName = key.charAt(0).toUpperCase() + key.slice(1);
      resp.push(this.renderCategorie(categorieName, sponsors));
    }

    return <div style={{margin:"40px 0",width:"100%"}}>{resp}</div>;
  }

  fetchSponsorData() {
    let {evid} = this.props;
    let url = this.sponsorsUrl + "?eventId=" + evid;

    const success = (data) => {
      let {sponsors} = data;
      this.setState({sponsors});
    };

    ajax({url, success});
  }

  componentDidMount() {
    this.fetchSponsorData();
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <a target="_blank" href="https://braziljs.org">
              <img src="https://braziljs.org/assets/images/braziljs.svg" width="120" alt="logo braziljs" />
            </a>
          </div>
          <h2 style={{fontWeight:300}}>
            Afiliados <strong>BrazilJS<sup>®</sup></strong>
          </h2>
        </header>
        {this.renderCategorieList()}
        <footer style={{fontSize:"12px",fontWeight:300}}>
          Gostaria de ter seu evento como filiado do BrazilJS?&nbsp;
          <a target="_blank" href="https://braziljs.org/filie-seu-evento" style={{color:"#ffde17"}}>
            <strong>Saiba mais no nosso portal</strong>
          </a>.
        </footer>
      </div>
    );
  }
}
