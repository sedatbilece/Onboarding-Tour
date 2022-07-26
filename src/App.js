
import './styles/App.css';
import Target from './components/Target';
function App() {


     const content =[
      {
        target:'news',
        title:'News title 1',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu mauris vitae metus placerat porta in id '
      },
      {
        target:'divb',
        title:'divB title 2',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu mauris vitae metus placerat porta in id '
      },
      {
        target:'about',
        title:'About title 3',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu mauris vitae metus placerat porta in id '
      },


     ]

  return (
    <div className="App">
                <Target content={content}/>



                <div className="sidebar">
  <a className="active" href="#home">Home</a>
  <a className="news" href="#news">News</a>
  <a className="contact" href="#contact">Contact</a>
  <a className="about" href="#about">About</a>
</div>

<div className="content">
  <h2>Responsive Sidebar Example</h2>
  <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
  <h3>Resize the browser window to see the effect.</h3>

   <div className='flexable'>
      <div className='diva'>a</div>
      <div className='divb'>b</div>

   </div>
</div>






        
         
    </div>
  );
}

export default App;
