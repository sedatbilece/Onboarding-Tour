
import './App.css';
import Target from './components/Target';
function App() {


     const content =[
      {
        target:'divb',
        title:'item title 1',
        text : 'item text 1'
      },
      {
        target:'contact',
        title:'item title 2',
        text : 'item text 2'
      },
      {
        target:'about',
        title:'item title 3',
        text : 'item text 3'
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
