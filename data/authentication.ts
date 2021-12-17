var md5 = require('md5');

function authenticate(password, formSettings, context): void {
  if (md5(password) === '098f6bcd4621d373cade4e832627b4f6') {
    const oldTitle = document.title;
    document.title = `CV_${formSettings.value.name}_${formSettings.value.lastName}_${context.app.i18n.locale}`;
    console.log(window);
    window.print();
    document.title = oldTitle;
  } else {
    alert("Sorry that's not correct.");
  }
}

export function getAuthenticationStatus() {
  return {
    authenticate,
  };
}
