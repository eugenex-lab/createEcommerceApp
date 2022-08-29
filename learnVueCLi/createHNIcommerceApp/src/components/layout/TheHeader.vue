<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">
          <img src="https://dp76jxyzopnbo.cloudfront.net/wealthng/2.0/static/images/logo-w.svg" alt="home"/>
        </router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">
            <img class="cartImage" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png" alt="home"
            />
          </router-link>
          <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li >

          <router-link class="logOut" to="/logout"><span class="signUpAlign">Sign Up</span></router-link>

        </li>




      <li v-if="loggedIn">
        <router-link to="/admin">Admin</router-link>
        c
      </li>
      <!--        // user account for login and logout-->
      <!--        <li v-if="loggedIn">-->
      <!--          <router-link to="/user">User</router-link>-->
      <!--        </li>-->
      <!--        <li v-if="!loggedIn">-->
      <!--          <router-link to="/login">Login</router-link>  -->
      <!--        </li>-->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

span.signUpAlign {
  position: relative;
  top: 0.3em;
}

button {
  background-color: #f3e019;
  color: #102e79;
  padding: 14px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 10px;
  margin: 10px 0 2px;

}
header {

  width: 100%;
  height: 4.5rem;
  background-color: #063a79;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 5px;
  border: 1px solid transparent;
}



a:active,
a:hover,
a.router-link-active {
  border-bottom: 0.3px solid #f3e019;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

li:hover {
  border-bottom: 0px solid #f3e019;
  width: 30%;
  position: relative;
  top: 3px;
}



li:last-child {
  border-bottom: 0px solid #f3e019;
  width: 30%;
}

.cartImage {

  width: 30px;
  height: 20px;
  color: #ffffff;
  position: relative;
  top: -1px;

}

.cartImage:hover {
  color: #f3e019;
  position: relative;
  top: 3px;
}


.logOut {

  height: 40px;
  width: 160px;
  /*border-radius: 4px;*/
  background-color: #F2BF00;
  -webkit-appearance: button;
  -moz-appearance: button;
  /*background-color: #b3a40f;*/
  /*color: #102e79;*/
  /*width: 120px;*/
  padding: 2px  19px 0 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
/*margin-bottom: 5px;*/
  float: right;
  border-radius: 4px;
  /*font-size : 15px;*/


  /*height: 20px;*/
  /*width: 61px;*/
  color: #000000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: NaNpx;
  right: -1.5rem;
}

</style>
