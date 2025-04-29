package unoeste.fipp.ativooperante_be.entities;


import jakarta.persistence.*;

@Entity
@Table(name="feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fee_id")
    private Long id;

    @Column(name="fee_texto")
    private String texto;

    @Column(name="den_id")
    private Long denId;

    public Feedback() {
            this(0L,"",0L);
    }

    public Feedback(Long id, String texto, Long denId) {
        this.id = id;
        this.texto = texto;
    }

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public String getTexto() {return texto;}

    public void setTexto(String texto) {this.texto = texto;}

    public Long getDenId() {return denId;}

    public void setDenId(Long denId) {this.denId = denId;}
}
