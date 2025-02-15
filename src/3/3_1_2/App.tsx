// 3_1_2 Profile editor 
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Ваша задача - реализовать это на React. Для вашего удобства разметка уже была преобразована в JSX, но вам нужно будет сделать так, чтобы она показывала и скрывала входы, как это делает оригинал.

    Убедитесь, что она также обновляет текст внизу!
*/


export default function EditProfile() {
    return (
        <form>
            <label>
                First name: <b>Jane</b>
                <input />
            </label>
            <label>
                Last name: <b>Jacobs</b>
                <input />
            </label>
            <button type="submit">Edit Profile</button>
            <p>
                <i>Hello, Jane Jacobs!</i>
            </p>
        </form>
    );
}