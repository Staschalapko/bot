
const phonePrefixes = ['099', '050', '066', '063', '095', '067', '096'];

exports.BasePage = class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.go = page.locator('#dynamicLink button span svg')
    this.call = page.locator('.box button[data-bs-target="#orderModal"] span svg');
    this.modalClose = page.locator('[id="swal2-title"]');
    this.nameInput = page.locator('#modalName');
    this.phoneInput = page.locator('#modalTel');
    this.submitButton = page.locator('.modal-dialog div [type="submit"] span.align-items-center');
  }

  async clickCall() {
    await this.go.click()
    await this.call.click()
  }

  async goto() {
    await this.page.goto('');
  }

  async enterData() {
    let user = this.getRandomUser()

    // await this.modalClose.isVisible();
    await this.nameInput.fill(user.name);
    await this.phoneInput.fill(user.phone);
  }

  async clickSubmit() {
    await this.submitButton.click();
    await this.page.pause(2000)
    await this.modalClose.isVisible();

  }

  getRandomPhoneNumber() {
    const prefix = phonePrefixes[Math.floor(Math.random() * phonePrefixes.length)];
    const suffix = Math.floor(1000000 + Math.random() * 9000000).toString();
    return `${prefix}${suffix}`;
  }

  getRandomName() {
    const names = [
      'Олександр', 'Олекс', 'Саша', 'Олексій', 'Алекс', 'Льоша', 'Сашко', 'Александр', 'Алексей', 'Алексей',
      'Марія', 'Маша', 'Машенька', 'Марина', 'Маринка', 'Марічка', 'Маша', 'Маша', 'Мария', 'Марина',
      'Анастасія', 'Настя', 'Настенька', 'Настюшка', 'Анастасия', 'Анастасия', 'Настя', 'Настя',
      'Іван', 'Ваня', 'Ванечка', 'Івашка', 'Иван', 'Ваня', 'Иванушка', 'Ваня',
      'Олена', 'Лєна', 'Оленка', 'Оленька', 'Елена', 'Лена', 'Еленка', 'Леночка',
      'Микола', 'Коля', 'Миколка', 'Коляска', 'Николай', 'Коля', 'Никола', 'Коля',
      'Сергій', 'Сергійко', 'Сєрьога', 'Серьожа', 'Сергей', 'Серега', 'Сергейко', 'Сережка',
      'Юлія', 'Юля', 'Юлька', 'Юльчик', 'Юлия', 'Юля', 'Юлька', 'Юльчик',
      'Дмитро', 'Діма', 'Дімочка', 'Дімон', 'Дмитрий', 'Дима', 'Димон', 'Димочка',
      'Катерина', 'Катя', 'Катюшка', 'Катерина', 'Екатерина', 'Катя', 'Катюшка', 'Катрін',
      'Віктор', 'Вітя', 'Вітюшка', 'Вітяня', 'Виктор', 'Витя', 'Витюшка', 'Витя',
      'Наталія', 'Наташа', 'Наташка', 'Наталя', 'Наталья', 'Наташа', 'Наташка', 'Наташа',
      'Тарас', 'Тарасик', 'Тарася', 'Тарас', 'Тарасик', 'Тарас', 'Тарасик', 'Тарас',
      'Людмила', 'Люда', 'Людочка', 'Людка', 'Людмила', 'Люда', 'Людочка', 'Людка',
      'Артур', 'Артурчик', 'Артурка', 'Артурец', 'Артурик', 'Артур', 'Артурчик', 'Артурка',
      'Галина', 'Галя', 'Галинка', 'Галка', 'Галина', 'Галя', 'Галочка', 'Галюся',
      'Богдан', 'Бодя', 'Богдаша', 'Богданко', 'Богдан', 'Бодя', 'Богдаша', 'Богданчик',
      'Валентин', 'Валя', 'Валентинка', 'Валентин', 'Валя', 'Валентинка', 'Валентинчик', 'Валентинчик',
      'Дарина', 'Даша', 'Даринка', 'Дарья', 'Даша', 'Дарья', 'Дашка', 'Дашуня',
      'Євген', 'Женя', 'Євгеній', 'Евгений', 'Женя', 'Евгений', 'Женька', 'Женечка',
      'Зоя', 'Зося', 'Зоечка', 'Зойка', 'Зоя', 'Зоя', 'Зоечка', 'Зося',
      'Ілля', 'Ілюша', 'Ілляшко', 'Илья', 'Илюша', 'Ильяша', 'Ильясик', 'Ильюшка',
      'Карина', 'Кара', 'Каринка', 'Каринка', 'Карина', 'Кара', 'Каринка', 'Карюша',
      'Леонід', 'Льоня', 'Лео', 'Лёня', 'Леонид', 'Леон', 'Лео', 'Лёня',
      'Марта', 'Машка', 'Мартуха', 'Мартка', 'Марта', 'Машка', 'Мартуха', 'Марточка',
      'Назар', 'Назик', 'Назарчик', 'Назік', 'Назар', 'Назарчик', 'Назик', 'Назарчик',
      'Оксана', 'Ксюша', 'Оксанка', 'Ксюха', 'Оксана', 'Ксюша', 'Оксанка', 'Ксюха',
      'Петро', 'Петя', 'Петрик', 'Петро', 'Петя', 'Петрик', 'Петюня', 'Петрик',
      'Роман', 'Рома', 'Ромка', 'Ромчик', 'Роман', 'Рома', 'Ромка', 'Ромчик',
      'Софія', 'Соня', 'Софийка', 'Софийка', 'София', 'Софа', 'Софочка', 'Софийка',
      'Тимофій', 'Тимко', 'Тима', 'Тимоха', 'Тимофей', 'Тима', 'Тимоша', 'Тимко',
      'Уляна', 'Уля', 'Улянка', 'Уляся', 'Ульяна', 'Уля', 'Улянка', 'Ульяся',
      'Федір', 'Федя', 'Федюшка', 'Федька', 'Федор', 'Федя', 'Федюшка', 'Федька',
      'Христина', 'Христя', 'Христинка', 'Христя', 'Кристина', 'Кристя', 'Кристинка', 'Кристина',
      'Юрій', 'Юра', 'Юрчик', 'Юрась', 'Юрий', 'Юра', 'Юрка', 'Юрася',
      'Ярослав', 'Ярко', 'Ярік', 'Ярославчик', 'Ярослав', 'Ярослав', 'Ярік', 'Ярославчик',
      'Захар', 'Захарчик', 'Захарко', 'Захарка', 'Захар', 'Захарчик', 'Захарка', 'Захарко',
      'Станіслав', 'Стас', 'Стася', 'Станислав', 'Стас', 'Стася', 'Станиславчик', 'Станислав',
      'Віолетта', 'Віола', 'Вета', 'Виолетта', 'Виола', 'Вета', 'Виолетточка', 'Веточка',
      'Лілія', 'Ліля', 'Лілюся', 'Лиля', 'Лилия', 'Лиля', 'Лиличка', 'Лиляся',
      'Максим', 'Макс', 'Максюта', 'Максімка', 'Максим', 'Макс', 'Максюта', 'Максік',
      'Антон', 'Антоша', 'Тоха', 'Антосик', 'Антон', 'Антоша', 'Тоха', 'Антончик',
      'Ірина', 'Ірка', 'Іруся', 'Ирина', 'Ира', 'Ирка', 'Ируся', 'Ириночка',
      'Юліан', 'Юлік', 'Юлик', 'Юліанко', 'Юлиан', 'Юлик', 'Юлик', 'Юлианко',
      'Остап', 'Остапчик', 'Остапко', 'Остапка', 'Остап', 'Остапчик', 'Остапко', 'Остапка',
      'Радислав', 'Радік', 'Радько', 'Радичек', 'Радислав', 'Радик', 'Радько', 'Радичек',
      'Злата', 'Златочка', 'Златася', 'Златушка', 'Злата', 'Златочка', 'Златушка', 'Златася',
      'Александр', 'Алексей', 'Анастасия', 'Андрей', 'Анна', 'Антон', 'Аркадий', 'Артем', 'Артур',
      'Борис', 'Валентин', 'Валерия', 'Василий', 'Виктор', 'Виктория', 'Виталий', 'Владимир', 'Владислав',
      'Галина', 'Григорий', 'Даниил', 'Дарья', 'Дмитрий', 'Евгений', 'Екатерина', 'Елена', 'Елизавета',
      'Зоя', 'Иван', 'Игорь', 'Инна', 'Ирина', 'Кирилл', 'Клавдия', 'Константин', 'Лариса',
      'Лев', 'Леонид', 'Любовь', 'Максим', 'Маргарита', 'Марина', 'Мария', 'Михаил', 'Надежда',
      'Наталья', 'Никита', 'Николай', 'Оксана', 'Олег', 'Ольга', 'Павел', 'Петр', 'Полина',
      'Роман', 'Светлана', 'Семен', 'Сергей', 'Снежана', 'София', 'Станислав', 'Степан', 'Тамара',
      'Татьяна', 'Тимофей', 'Ульяна', 'Федор', 'Юлия', 'Юрий', 'Яна', 'Ярослав',
      'Агата', 'Агния', 'Алиса', 'Алла', 'Альберт', 'Альфия', 'Анастасий', 'Анфиса', 'Арсен',
      'Артемий', 'Афанасий', 'Бронислав', 'Валентин', 'Варвара', 'Венера', 'Вера', 'Викентий', 'Владлена',
      'Всеволод', 'Геннадий', 'Георгий', 'Герман', 'Глеб', 'Дина', 'Ефим', 'Захар', 'Илья', 'Лидия'
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  getRandomUser() {
    return {
      name: this.getRandomName(),
      phone: this.getRandomPhoneNumber()
    };
  }


};
