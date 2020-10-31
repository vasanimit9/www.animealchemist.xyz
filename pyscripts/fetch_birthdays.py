import requests
import json
import sys
import os


def register_user_agent():
    url = 'https://www.animecharactersdatabase.com/vars.php'
    headers = {'User-Agent': 'animealchemist.xyz'}
    requests.get(url, headers=headers)


def fetch_birthdays(month, day):
    APIHost = 'https://wwww.animecharactersdatabase.com/'
    url = 'https://www.animecharactersdatabase.com/api_series_characters.php'
    headers = {'User-Agent': 'animealchemist.xyz'}
    output = requests.get(url + '?month=' + str(month) +
                          '&day=' + str(day), headers=headers).json()
    output['birth_month'] = int(output['birth_month'])
    output['birth_day'] = int(output['birth_day'])
    for i in output:
        if type(output[i]) == str:
            if output[i][0] == "/":
                output[i] = os.path.join(APIHost, output[i])
        elif type(output[i]) == list:
            for j in range(len(output[i])):
                if type(output[i][j]) == dict:
                    for k in output[i][j]:
                        if type(output[i][j][k]) == str:
                            if output[i][j][k][0] == "/":
                                output[i][j][k] = os.path.join(
                                    APIHost, output[i][j][k])
    return output


birthdays = {}
register_user_agent()
for month in range(1, 13):
    for day in range(1, 32):
        try:
            birthday = fetch_birthdays(month, day)
            birthdays[str(month) + '/' + str(day)] = birthday
        except:
            print('Error')

birthdays_file_path = sys.argv[1]

try:
    birthdays_file = open(birthdays_file_path, 'r')
    birthdays_json = json.load(birthdays_file)
    birthdays_file.close()
    birthdays_json.update(birthdays)
except:
    birthdays_json = birthdays

birthdays_file = open(birthdays_file_path, 'w')
json.dump(birthdays_json, birthdays_file)
birthdays_file.close()
