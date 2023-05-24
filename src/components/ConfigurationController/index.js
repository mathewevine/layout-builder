import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="con-container">
          <h1>Layout</h1>
          <ul>
            <li>
              <input
                id="content"
                type="checkbox"
                onClick={onToggleShowContent}
                defaultChecked={showContent}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                id="leftnav"
                type="checkbox"
                onClick={onToggleShowLeftNavbar}
                defaultChecked={showLeftNavbar}
              />
              <label htmlFor="leftnav">Left Navbar</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="rightnav"
                onClick={onToggleShowRightNavbar}
                defaultChecked={showRightNavbar}
              />
              <label htmlFor="rightnav">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
