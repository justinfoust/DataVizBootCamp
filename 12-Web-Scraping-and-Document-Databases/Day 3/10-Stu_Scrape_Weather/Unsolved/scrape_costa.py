from splinter import Browser
from bs4 import BeautifulSoup as bs
import time


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "chromedriver.exe"}
    return Browser("chrome", **executable_path, headless=False)


def scrape_info():
    browser = init_browser()

    # Visit visitcostarica.herokuapp.com
    url = "https://visitcostarica.herokuapp.com/"
    browser.visit(url)

    time.sleep(1)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, "html.parser")

    # Get the average temps
    # @TODO: YOUR CODE HERE!

    # Get the min avg temp
    # @TODO: YOUR CODE HERE!

    min_temp = soup.find('div', id_='weather').p.strong.text

    # Get the max avg temp
    # @TODO: YOUR CODE HERE!

    max_temp = soup.find('div', id_='weather').p.strong.text

    # BONUS: Find the src for the sloth image
    # @TODO: YOUR CODE HERE!

    sloth_img = soup.find('img', alt_='Image 2')['src']

    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_img,
        "min_temp": min_temp,
        "max_temp": max_temp
    }

    # Quite the browser after scraping
    browser.quit()

    # Return results
    return costa_data
