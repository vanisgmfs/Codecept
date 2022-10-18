Feature('login');

Scenario('Install and First Login', ({ I }) => {

// fill email field

I.wait(5);
I.fillField('~email', 'teste@teste.com');

// fill password field
I.fillField('~senha', '123456');
I.seeElement('~entrar');

// tap on enter
I.tap('~entrar');
I.wait(1);

// check

I.waitForElement('~salvar', '3')
I.saveScreenshot('Area logada.png');

});
