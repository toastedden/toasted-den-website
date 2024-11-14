# Toasted Den's Website

This is the official repository for the [Toasted Den website](https://toastedden.com). The website provides contact information for Toasted Den, including business inquiries and direct contact details.

## Site Link Tree
[Main page](https://toastedden.com/) (`index.html`)

[Site info page](https://toastedden.com/info) (`info.html`)

[Universal 404 error page](https://toastedden.com/404) (`404.html`)

[ToastBot redirect](https://toastedden.com/toastbot) (`toastbot.html`)


## Setup

**1. Install [Docker and Docker Compose](https://docs.docker.com/engine/install/).**

**2. Clone this repository to your local machine:**
   ```bash
   git clone https://github.com/toastedden/toasted-den-website.git
   cd toasted-den-website
   ```

**3. Start the containers in detached mode:**
   ```bash
   docker compose up -d
   ```
And navigate to http://localhost:2712 to view the site.

The container will also spin up an API server via node.js to count website visits.

You can host or reverse proxy the site as needed.
(Make sure to properlly configure `./website./nginx/nginx.conf` for reverse proxy)

**5. Firewall Configuration (Debian-based systems):**

Remember to add a firewall rule for the ports you will be using to host the site. In this case, we're using ports `2712` and `3000`. On a Debian-based operating system, add the firewall rules by running the following commands:
   ```bash
   ufw allow 2712
   ufw allow 3000
   ufw enable
   ufw reload # reload the ufw if it's already enabled
   ```
Check the status of your firewall to ensure the ports are open:
   ```bash
   ufw status
   ```

## Committing
If you think you can enhance or optimize the site, feel free to make a pull request!

## License
This project is licensed under the [CC0-1.0 License](https://opensource.org/licenses/CC0-1.0) - see the [LICENSE file](LICENSE) for details.
