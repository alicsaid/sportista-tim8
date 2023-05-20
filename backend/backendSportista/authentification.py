from django.shortcuts import redirect


def reset_password_confirm(request, uid, token):
    return redirect('http://localhost:3000/password/reset/confirm/' + uid + "/" + token)


def activate_account(request, uid, token):
    return redirect('http://localhost:3000/activate/' + uid + "/" + token)