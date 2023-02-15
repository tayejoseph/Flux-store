import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { addCatalog, updateCatalog } from "../../../store/actions/user";
import { notify } from "react-notify-toast";
import { formValidator } from "../../../helpers";
import { Modal, Button } from "../../../UI";
import { ProductCategories } from "../../../Constants";
import SideNav from "./SideNav";
import InfoForm from "./InfoForm";
import UploadForm from "./UploadForm";
import Container from "./styles";

const ProductForm = () => {
  const dispatch = useDispatch();
  const { catalogues } = useSelector((s) => s.user);
  const {
    params: { productId },
  } = useRouteMatch();
  const [loading, setLoading] = useState(false);
  const activeProduct = catalogues[productId] ? catalogues[productId] : {};
  const [formData, setFormState] = useState({
    name: "",
    description: "",
    amount: "",
    quantity: 0,
    category: ProductCategories[0],
    delivery: "",
    ...activeProduct,
  });
  const { state, pathname } = useLocation();

  const disabled = useMemo(() => {
    const { name, description, amount, quantity } = formData;
    return !name || !description || !amount || quantity === "";
  }, [formData]);
  const history = useHistory();

  const handleFormInput = ({ target }) => {
    setFormState({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      formValidator(
        document.forms["catalog-form"].getElementsByTagName("input")
      )
    ) {
      try {
        setLoading(true);
        console.log(productId, "fddjkfdfkj");
        const { status } = productId
          ? await dispatch(
              updateCatalog(
                { ...formData, kind: "PHYSICAL", ref: activeProduct.ref },
                productId
              )
            )
          : await dispatch(addCatalog({ ...formData, kind: "PHYSICAL" }));
        if (status === 201 || status === 200) {
          notify.show(
            `Successfully ${productId ? "updated" : "added"} product`,
            "success"
          );
          setTimeout(() => {
            history.push("/dashboard/store/");
          }, 500);
        }
      } catch {
        setLoading(false);
      }
    }
  };
  return (
    <Container>
      <Modal
        showModal={true}
        onClose={() => history.push("/dashboard/store")}
        className="modal-size_md modal-close_relative"
      >
        <div className="productForm-container">
          <header>
            <h2 className="u-typo_title">
              {productId ? "Edit" : "Add"} Product
            </h2>
          </header>
          <main>
            <SideNav disabled={disabled} />
            <form
              id={"productForm"}
              name={"catalog-form"}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              noValidate
            >
              <div className={state?.section !== "infoForm" && "hide-section"}>
                <InfoForm {...{ handleFormInput, formData }} />
              </div>
              <div
                className={state?.section !== "uploadForm" && "hide-section"}
              >
                <UploadForm {...{ handleFormInput, formData }} />
              </div>
            </form>
          </main>
          <footer>
            {state?.section === "uploadForm" ? (
              <>
                <Button tertiary>Save and publish later</Button>{" "}
                <div>
                  <Button
                    secondary
                    rounded
                    onClick={() =>
                      history.push(pathname, { section: "infoForm" })
                    }
                  >
                    Back
                  </Button>
                  <Button rounded onClick={handleSubmit} loading={loading}>
                    Publish
                  </Button>
                </div>
              </>
            ) : (
              <div className="next-container">
                <Button
                  rounded
                  disabled={disabled}
                  onClick={() => {
                    if (
                      formValidator(
                        document.forms["catalog-form"].getElementsByTagName(
                          "input"
                        )
                      )
                    ) {
                      history.push(pathname, { section: "uploadForm" });
                    }
                  }}
                >
                  Next
                </Button>
              </div>
            )}
          </footer>
        </div>
      </Modal>
    </Container>
  );
};

export default ProductForm;
