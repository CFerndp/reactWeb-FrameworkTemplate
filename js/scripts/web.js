class Header extends React.Component{
  render() {
    return (
      <header className="w3-container w3-theme">
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}

class OpenNav extends React.Component{
  render(){
    return (
      <div className="w3-container w3-theme">
        <span className="w3-opennav w3-xlarge" onClick={this.props.handleOpenNav}>&#9776; Menu Lateral</span>
      </div>
    );
  }
}

class NavBar extends React.Component{
  render(){

    let elements = this.props.info.map((item,index)=> {
      if(item.key !== "link"){
        return <a href={"#"+item.key} key={"#"+item.key}>{item.key}</a>
      }else{
        return <a href={item.url} key={"#"+item.ref}>{item.ref}</a>
      }
    });



    return(
      <div className="NavBar" style={{display: this.props.display}} onClick={this.props.handleCloseNav}>
        <nav className="w3-sidenav w3-large w3-theme-l3" sytle={{display: "block"}}>
          {elements}
        </nav>
      </div>
    );
  }
}

class Stext extends React.Component{
  render(){

    let ps = [];
    let texts= this.props.children;

    if(!Array.isArray(texts)){
      texts  = [texts];
    }

    for(let i=0;i<texts.length;i++){
      const t = texts[i];

      ps.push(
        <p key={"K"+t}>{t}</p>
      );
    }

    return (
      <div className="sText">
        {ps}
        <br/>
      </div>
    );
  }
}

class Btext extends React.Component{
  render(){
    return (
      <div className="sText">
        <b>{this.props.children}</b><br/>
      </div>
    );
  }
}

class Title extends React.Component {

  render(){
    return (
      <div className="TabTitle w3-animate-opacity" ><h1>{this.props.children}</h1><br/></div>
    );
  }
}

class Subtitle extends React.Component {

  render(){
    return (
      <div className="TabSubtitle w3-animate-opacity"><h3>{this.props.children}</h3><br/></div>
    );
  }
}

class Card extends React.Component{

  render(){

    console.log("Card:",this.props);
    return (
      <div className="w3-card-24 w3-animate-opacity">

          <header className="w3-container w3-theme">
           <h1>{this.props.title}</h1>
          </header>

          <div className="w3-container">
          <p>{this.props.info}</p>
          </div>
      </div>
    );
  }
}

class Elink extends React.Component{
  render(){
    return (
      <div className="Elink">
        <a href={"mailto:"+this.props.children}>Email: {this.props.children}</a><br/>
      </div>
    );
  }
}

class VYoutube extends React.Component{

  render(){
    return (
        <div className="yvideo w3-animate-left">
          <br/>
          <iframe width="auto" height="auto"
            src={this.props.url} allowFullScreen>
          </iframe>
          <br/>
        </div>

    );
  }
}

class Iframe extends React.Component{
  render(){
    return (
      <div className="Iframe">
          <iframe src={this.props.info} frameborder="0" align="middle" allowfullscreen/>
     </div>
    );
  }
}

class Tab extends React.Component{
  render(){
    let index=0;
    let id = this.props.id;



    let elements = this.props.info.map((item) => {
      index++;
      switch (item.type) {
        case "stext":
          return <Stext key={"Sk"+id+index}>{item.value}</Stext>
          break;

        case "title":
          return <Title key={"Tk"+id+index}>{item.value}</Title>
          break;

        case "subtitle":
          return <Subtitle key={"Stk"+id+index}>{item.value}</Subtitle>
          break;

        case "yvideo":
          return <VYoutube key={"VYk"+id+index} url={item.value}/>
          break;

        case "card":
          return <Card key={"Ck"+id+index} info={item.value.info} title={item.value.title}/>
          break;

        case "btext":
          return <Btext key={"Bk"+id+index}>{item.value}</Btext>
          break;

        case "elink":
          return <Elink key={"Ek"+id+index}>{item.value}</Elink>
          break;

        case "iframe":
          return <Iframe key={"IK"+id+index} info={item.value}/>

        default:
          console.log("Objeto Vacio");
      }

    });

    return (
      <div className="w3-container" id={this.props.id}>
        {elements}
      </div>
    );
  }
}

class InfoContent extends React.Component{
  render(){
    let elements = this.props.info.map((item) => {
      if(item.key!=="link"){
        return <Tab key={"T"+item.key} id={item.key} info={item.value}/>
      }
    });

    return (
      <div className="infoContent">
        <div className="w3-tab">
          {elements}
        </div>
      </div>
    );
  }
}

class Footer extends React.Component{
  render(){
    return (
      <footer className="w3-container w3-theme">
        <h5>{this.props.children}</h5>
        <p>{this.props.info}</p>
      </footer>
    );
  }
}


class Body extends React.Component{


  constructor(props){

    super(props);

    var d = new Date();

    var yaux = d.getFullYear();
    this.state = {
          pointOfEnter: "Home",
          pointOfEnterBool:false,
          inf : [
                  {key:"Home",value:[
                    {type:"title",value:"Ultimas Noticias"},
                    {type:"stext",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat, leo eget scelerisque hendrerit, risus neque dictum nisl, ut varius turpis nisl quis odio. Nunc in odio luctus quam porttitor eleifend vel ut leo. Nunc condimentum diam nisl, sit amet suscipit mi vehicula vitae. In elit tortor, venenatis id augue et, placerat elementum nulla. Sed rutrum, urna id tincidunt ornare, ipsum nisl iaculis dui, non pretium nibh nunc et orci. Quisque sollicitudin urna ipsum, sit amet vulputate purus ultricies eget. Nam sodales diam in mi mollis, feugiat lobortis ante dignissim. Aliquam dignissim vel leo sit amet elementum. Morbi dolor nunc, sodales vel tincidunt at, scelerisque vel purus. Integer semper suscipit euismod. Ut vestibulum quam semper libero pellentesque rhoncus."},
                    {type:"yvideo",value:"https://www.youtube.com/embed/H3ZCKXX7tVI"},
                    {type:"card",value:{title:"Ipsum",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat, leo eget scelerisque hendrerit, risus neque dictum nisl, ut varius turpis nisl quis odio. Nunc in odio luctus quam porttitor eleifend vel ut leo. Nunc condimentum diam nisl, sit amet suscipit mi vehicula vitae. In elit tortor, venenatis id augue et, placerat elementum nulla. Sed rutrum, urna id tincidunt ornare, ipsum nisl iaculis dui, non pretium nibh nunc et orci. Quisque sollicitudin urna ipsum, sit amet vulputate purus ultricies eget. Nam sodales diam in mi mollis, feugiat lobortis ante dignissim. Aliquam dignissim vel leo sit amet elementum. Morbi dolor nunc, sodales vel tincidunt at, scelerisque vel purus. Integer semper suscipit euismod. Ut vestibulum quam semper libero pellentesque rhoncus."}}
                                    ]
                  },
                  {key:"link",url:"/tienda",ref:"Tienda"},
                  {key:"Contáctanos",value:[
                    {type:"title",value:"Contáctanos"},
                    {type:"iframe",value:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.359750244833!2d-5.8397651463746785!3d43.34858500310817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xa97251142e47fb1d!2sTalleres+Ardys!5e0!3m2!1ses!2ses!4v1443082291944"},
                    {type:"subtitle",value:"Puedes localizarnos en la siguiente direccion"},
                    {type:"stext",value:["Ardys Ardys Automotive S.L.U","Fuente del Forno 1","33008 Oviedo Asturias(España)","Puedes llamarnos a","TLF: 984059302","MOVIL: 622 22 79 14"]},
                    {type:"subtitle",value:"Puedes llamarnos a"},
                    {type:"stext",value:["TLF: 984059302","MOVIL: 622 22 79 14"]},
                    {type:"subtitle",value:"Escribenos a"},
                    {type:"elink",value:"info@ardys.es"}
                                           ]
                  },
                  {key:"Acerca de nosotros",value:[
                    {type:"title",value:"Acerca de nosotros"},
                    {type:"stext",value:"Phasellus rutrum dolor odio, consectetur pulvinar orci ornare quis. Duis elit odio, iaculis sit amet molestie vel, pretium vel augue. Integer pretium odio vitae lobortis condimentum. Phasellus vitae ligula viverra, laoreet nisl vel, euismod metus. Duis at elit dui. Suspendisse vitae arcu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget libero nibh."}
                                         ]
                  }
                ],
        navDisplay:"none",
        navDisBool:false,
        year:yaux
    };

    this.handleClickCloseNav = (e)=>{
      //console.log("Consola Abierta");
      this.setState({navDisplay:"none",navDisBool:false});

      return;
    };

    this.handleClickNav= (e)=>{

      let navState = this.state.navDisBool;

      let dis;

      if(navState){
        dis="none";
      }else{
        dis="block"
      }
      this.setState({navDisplay:dis,navDisBool:!navState});

      return;
    };
  }

  pointOfEnter(){
    if(!this.state.pointOfEnterBool){
      location.href="#";
      setTimeout(()=>{
        location.href="#"+this.state.pointOfEnter;
        window.clearTimeout(this);
      });
    }

    this.setState({pointOfEnterBool:true});
  }

  componentDidMount(){
    this.pointOfEnter();
  }

  render() {


    return (
    <div className="flex-container">
      <Header>ARDYS AUTOMOTIVE S.L</Header>
      <OpenNav handleOpenNav={this.handleClickNav}/>
      <NavBar handleCloseNav={this.handleClickCloseNav} display={this.state.navDisplay} info={this.state.inf}/>
      <InfoContent info={this.state.inf}/>
      <Footer info={"© "+this.state.year+" Ardys Automotive S.L"}>Ardys Automotive</Footer>
      </div>
      );
    }
}


ReactDOM.render(
  React.createElement(Body, null),
  document.getElementById('content')
);
