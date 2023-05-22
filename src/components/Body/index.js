import './index.css'

const Body = () => (
  <div className="body-container">
    <div className="leftnavdiv">
      <p>Left Navbar Menu</p>
      <ul>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
      </ul>
    </div>
    <div className="contentdiv">
      <h2>Content</h2>
      <p>Lorem ipsum</p>
    </div>
    <div className="rightnavdiv">
      <h2>Right Navabar</h2>
      <div className="ad">
        <p>Ad 1</p>
      </div>
      <div className="ad">
        <p>Ad 2</p>
      </div>
    </div>
  </div>
)

export default Body
