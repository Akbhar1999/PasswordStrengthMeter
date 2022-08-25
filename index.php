<?php require_once 'templates/header.php' ?>
<div class="container py-5">
    <h1 class="text-capitalize">password strength meter</h1>
    <hr>
    <form>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password"  autofocus>
      </div>
      <div class="mb-3">
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" aria-label="password strength bar" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
    </form>
<section id="password-icons">
  <p>contains upper case</p><div id="contains_upper"></div>
  <p>contains lower case</p>
  <div id="contains_lower"></div>
  <p>contains number</p>
  <div id="contains_number"></div>
  <p>contains contains a special character</p>
  <div id="contains_number"></div>
  <p>is 8 characters long</p>
  <div id="minLength"></div>
</section>
 </div>
<?php require_once 'templates/footer.php' ?>
