import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <>
    <div className="flex justify-center">
      <div class="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="600"
          height="600"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M428 349.916c46.317 0 84-37.682 84-84s-37.683-84-84-84H278.999c-5.522 0-10 4.477-10 10s4.478 10 10 10h118.705v50.678c0 57.885-24.595 112.847-67.589 151.406H136.972c.295-.286.597-.563.889-.854 11.572-11.572 18.854-26.178 20.504-41.129 1.74-15.777-2.906-30.071-13.084-40.249-16.115-16.113-42.287-17.402-64.641-5.158-6.86-20.645-10.344-42.121-10.344-64.016v-50.678H189c5.523 0 10-4.477 10-10s-4.477-10-10-10H60.295c-5.522 0-10 4.477-10 10v60.678c0 26.292 4.57 52.034 13.567 76.635-11.548 11.566-18.816 26.155-20.463 41.087-1.394 12.631 1.316 24.305 7.672 33.684H10c-5.523 0-10 4.477-10 10 0 31.981 26.019 58 58 58h31.005c4.646 22.794 24.85 40 48.995 40h191.999c24.146 0 44.35-17.206 48.995-40h31.005c31.982 0 58-26.019 58-58 0-5.523-4.477-10-10-10h-99.425c14.961-16.224 27.333-34.465 36.827-54.083H428zm-289.516 9.908c-1.152 10.448-6.396 20.811-14.767 29.18v.001c-8.369 8.369-18.731 13.613-29.18 14.766-3.756.415-7.336.262-10.654-.413-1.037-12.458 7.009-24.263 19.511-27.512 16.505-4.288 28.602-17.036 32.881-32.388 2.098 4.755 2.874 10.339 2.209 16.366zM63.277 372.51c1.153-10.448 6.397-20.811 14.767-29.18 9.861-9.861 22.214-15.056 33.27-15.056 2.252 0 4.449.222 6.561.658 1.06 12.475-6.991 24.305-19.509 27.557-16.504 4.288-28.601 17.036-32.88 32.389-2.097-4.758-2.874-10.341-2.209-16.368zM409.999 452h-40c-5.522 0-10 4.477-10 10 0 16.542-13.458 30-30 30H138c-16.542 0-30-13.458-30-30 0-5.523-4.478-10-10-10H58c-17.494 0-32.265-11.882-36.665-28h425.329c-4.4 16.118-19.171 28-36.665 28zM428 201.916c35.29 0 64 28.71 64 64s-28.71 64-64 64h-24.096c2.892-7.842 5.352-15.852 7.353-24H428c22.056 0 40-17.944 40-40s-17.944-40-40-40h-10.296v-24zm-10.296 44H428c11.028 0 20 8.972 20 20s-8.972 20-20 20h-12.808c1.649-10.954 2.512-22.086 2.512-33.322zM307.598 139.929c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929 2.56 0 5.118-.976 7.071-2.929 17.658-17.659 17.658-46.391 0-64.049-4.777-4.776-7.408-11.127-7.408-17.882s2.631-13.105 7.408-17.882c3.905-3.905 3.905-10.237 0-14.142-3.904-3.905-10.234-3.905-14.143 0-8.554 8.554-13.266 19.927-13.266 32.024s4.712 23.47 13.266 32.024c9.861 9.86 9.861 25.903.001 35.764zM146.26 139.929c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929c17.658-17.659 17.658-46.391 0-64.049-9.86-9.86-9.86-25.904 0-35.764 3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0-17.658 17.658-17.658 46.391 0 64.049 9.861 9.86 9.861 25.903.001 35.764zM226.929 139.929c-3.905 3.905-3.905 10.237 0 14.142C228.882 156.024 231.44 157 234 157s5.118-.977 7.071-2.929c22.784-22.784 22.784-59.857 0-82.642-7.26-7.26-11.258-16.912-11.258-27.179s3.998-19.919 11.258-27.179c3.905-3.905 3.905-10.237 0-14.142s-10.235-3.905-14.143 0c-11.037 11.037-17.115 25.712-17.115 41.321s6.078 30.284 17.115 41.321c14.987 14.987 14.987 39.371.001 54.358z" />
          <path d="M234 181.92c-2.63 0-5.21 1.06-7.07 2.92-1.86 1.87-2.93 4.44-2.93 7.08 0 2.63 1.069 5.21 2.93 7.07 1.86 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07 0-2.64-1.07-5.21-2.931-7.08-1.859-1.86-4.439-2.92-7.069-2.92z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">{siteTitle}</span>
      </div>
      {/* <h1 className=" text-center">
        <Link to="/" className="text-purple-400">
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header