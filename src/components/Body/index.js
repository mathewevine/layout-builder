import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="leftnavdiv">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="contentdiv">
              <h2>Content</h2>
              <p>Lorem ipsum</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="rightnavdiv">
              <h1>Right Navbar Menu</h1>
              <div className="ad">
                <p>Ad 1</p>
              </div>
              <div className="ad">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
