from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 3)  # Attente entre 1 et 3 secondes entre chaque requête

    @task
    def search_artist(self):
        self.client.get("/artist/Eminem")  

    @task
    def genre(self):
        self.client.get("/genre/457")
