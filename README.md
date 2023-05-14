# Specifikacije za projekat iz DWS/WEB2
## “Sportista”- Tim 8

### TKN/IT
### 2022/2023 
### Odsjek za matematičke i kompjuterske nauke 
### Prirodno-matematički fakultet 
### Univerzitet u Sarajevu 

## Uvod

“Sportista" je aplikacija koja služi za iznajmljivanje sportskih terena i dogovaranje termina na lagan i brz način.\

Aplikacija se sastoji iz više modula, te je predviđena za korištenje različitim tipovima korisnika:\
    • administrator sistema\
    • iznajmljivači sportskih sala/terena\
    • korisnici sportskih terena.\

Administrator sistema ima kontrolu nad svim dešavanjima u sistemu, dodaje se direktno kroz bazu podataka.\
Iznajmljivači sportskih sala/terena su registrovani korisnici, te imaju mogućnost administracije svih podataka o terenima i terminima.\
Korisnici sportskih terena su registrovani korisnici koji primarno imaju mogućnost rezervisanja terena/sala i termina.\

## Detaljne specifikacije

U nastavku će biti navedene detaljnije specifikacije za svaki tip korisnika.\

• Modul 1: Administrator\
    o može brisati ili upozoriti korisnike i iznajmljivače;\
    o ima uvid u sve tabele baze podataka;\
    o odobrava registracije novih iznajmljivača; \
• Modul 2: Iznajmljivači\
    o imaju mogućnost registracije na sistem;\
    o odgovorni su za upravljanje i ažuriranje podataka o salama/terenima (cijena po satu, dostupnost, vrsta sporta za koji je sala/teren namijenjen itd.);\
    o imaju mogućnost dodavanja nove sale/terena, te zaključavanja ili brisanja postojećih;\
    o imaju mogućnost pregleda recenzija i ocjena svojih sala/terena;\
    o imaju mogućnost pregleda statistika o zaradi, broju rezervacija, najtraženijim salama/terminima itd. \
• Modul 3: Korisnici\
    o imaju mogućnost registracije na sistem;\
    o imaju mogućnost pregleda dostupnih terena, pretraživanje terena po lokaciji, sportu, cijeni i dostupnosti;\
    o imaju mogućnost rezervisanja termina;\
    o imaju mogućnost da klikom na dugme aplikacija slučajnim uzorkom podijeli prijavljene osobe za termin u timove;\
    o imaju mogućnost postavljanja recenzija i ocjena za terene;\
    o imaju mogućnost pronalaska osoba sa sličnim interesima;\
    o statistika odigranih i neodigranih rezervacija;\
    o imaju mogućnost dobivanja pozivnice (notifikacije) kada je dostupan termin za odabrani sport; \n\

## Tehnologije

Tehnologije koje će se koristiti za izradu aplikacije:\

• Baza podataka:\
    o PostgreSQL\
• Backend:\
    o Django\
• Frontend:\
    o ReactJS\
