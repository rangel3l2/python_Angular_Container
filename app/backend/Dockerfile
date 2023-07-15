FROM python:3.9.17-bullseye
WORKDIR /app
COPY requirements.txt requirements.txt
RUN apt-get -y update 
#ZSH instalation
RUN apt-get install -y zsh curl git
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
RUN usermod -s $(which zsh) $(whoami)
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . .

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]